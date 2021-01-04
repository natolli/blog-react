import React, { useState } from "react";
import { PostsContainer } from "./Posts.style";
import { Container } from "../../utils/Global";
import Card from "../../components/card/Card";
import { useQuery } from "@apollo/client";
import { POSTS } from "../../graphql/queries/posts";
import Loader from "../../components/loader/Loader";
import Alert from "../../components/alert/Alert";
import Button from "../../components/button/Button";

const Posts = () => {
  const { data, loading, error, fetchMore } = useQuery(POSTS, {
    variables: { limit: 5, cursor: null },
  });

  const [lastPostDate, setLastPostDate] = useState(null);

  const loadingStyle = {
    width: "100vw",
    height: "555px",
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
  };

  if (loading) {
    return (
      <div style={loadingStyle}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <Alert>Failed to get posts</Alert>;
  }
  if (data) {
  }

  return (
    <PostsContainer>
      <Container>
        <Card />
        {data && data.posts.posts.map((post) => <Card post={post} />)}
      </Container>

      <div
        style={{
          margin: "50px 0",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {data && data.posts.hasMore && (
          <Button
            modifiers={["secondary", "rounded"]}
            onClick={() =>
              fetchMore({
                variables: {
                  limit: 5,
                  cursor:
                    data.posts.posts[data.posts.posts.length - 1].createdAt,
                },
                updateQuery: (previousData, { fetchMoreResult }) => {
                  fetchMoreResult.posts.posts = [
                    ...previousData.posts.posts,
                    ...fetchMoreResult.posts.posts,
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
    </PostsContainer>
  );
};

export default Posts;
