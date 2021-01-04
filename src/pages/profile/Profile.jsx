import React from "react";
import { ProfileContainer } from "./Profile.styles";
import { Container } from "../../utils/Global";
import Card from "../../components/card/Card";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_USER_POSTS } from "../../graphql/queries/getUserPosts";
import Loader from "../../components/loader/Loader";
import Alert from "../../components/alert/Alert";
import { ME } from "../../graphql/queries/me";
import NewPost from "../../components/newPost/NewPost";
import Button from "../../components/button/Button";

const Profile = () => {
  const { userId } = useParams();

  const uId = parseInt(userId);
  const { data, loading, error, fetchMore } = useQuery(GET_USER_POSTS, {
    variables: { limit: 5, cursor: null, id: uId },
  });

  const { data: MeData, loading: MeLoading, error: MeError } = useQuery(ME);

  let posts = null;
  let postLength = null;
  let postUser = null;

  const loadingStyle = {
    width: "100vw",
    height: "555px",
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
  };

  if (loading || MeLoading) {
    return (
      <div style={loadingStyle}>
        <Loader />
      </div>
    );
  }

  if (error || MeError) {
    return <Alert>Failed to get posts</Alert>;
  }
  if (data) {
    posts = data.getUserPosts.posts;
    if (data.getUserPosts.posts) {
      if (data.getUserPosts.posts[0]) {
        postUser = data.getUserPosts.posts[0].user;
      }
    }
  }
  if (MeData) {
    postLength = MeData.me.posts.length;
  }

  return (
    <>
      <ProfileContainer>
        <div className="detail">
          {postUser ? (
            <div className="first">
              <h1 className="name">{`${postUser.firstName} ${postUser.lastName}`}</h1>
              <p className="email">{postUser.email}</p>
            </div>
          ) : (
            <div className="first">
              <h1 className="name">{`${MeData.me.firstName} ${MeData.me.lastName}`}</h1>
              <p className="email">{MeData.me.email}</p>
            </div>
          )}
          <div className="second">
            <div className="spam"></div>
            <h2 className="blogged">{`Total Blogged: ${postLength} Posts`}</h2>
          </div>
        </div>
        <Container>
          {posts.length === 0 ? (
            <h1 style={{ height: "157px" }}></h1>
          ) : (
            posts.map((post) => <Card post={post} />)
          )}
        </Container>
        <NewPost />
        <div
          style={{
            margin: "50px 0",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {data && data.getUserPosts.hasMore && (
            <Button
              modifiers={["secondary", "rounded"]}
              onClick={() =>
                fetchMore({
                  variables: {
                    id: uId,
                    limit: 5,
                    cursor:
                      data.getUserPosts.posts[
                        data.getUserPosts.posts.length - 1
                      ].createdAt,
                  },
                  updateQuery: (previousData, { fetchMoreResult }) => {
                    const newPrevData = previousData.getUserPosts.posts.filter(
                      (post) => post.user.id === userId
                    );
                    const newFetchData = fetchMoreResult.getUserPosts.posts.filter(
                      (post) => post.user.id === userId
                    );

                    fetchMoreResult.getUserPosts.posts = [
                      ...newPrevData,
                      ...newFetchData,
                    ];
                    return fetchMoreResult;
                  },
                })
              }
            >
              Load More
            </Button>
          )}
        </div>
      </ProfileContainer>
    </>
  );
};

export default Profile;
