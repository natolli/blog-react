import React from "react";
import { PostsContainer } from "./Posts.style";
import { Container } from "../../utils/Global";
import Card from "../../components/card/Card";
import { useQuery } from "@apollo/client";
import { POSTS } from "../../graphql/queries/posts";
import Loader from "../../components/loader/Loader";
import Alert from "../../components/alert/Alert";
import NewPost from "../../components/newPost/NewPost";

const Posts = () => {
  const { data, loading, error } = useQuery(POSTS, {
    variables: { limit: 15, cursor: null },
  });

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
    console.log(data);
  }

  return (
    <PostsContainer>
      <Container>
        <Card />
        {data && data.posts.posts.map((post) => <Card post={post} />)}
      </Container>
      <NewPost />
    </PostsContainer>
  );
};

export default Posts;
