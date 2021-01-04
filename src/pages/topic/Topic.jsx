import React from "react";
import { TopicContainer } from "./Topic.styles";
import { useParams } from "react-router-dom";
import Alert from "../../components/alert/Alert";
import Loader from "../../components/loader/Loader";
import { useQuery } from "@apollo/client";
import { GET_TOPIC_POSTS } from "../../graphql/queries/getTopicPosts";
import Card from "../../components/card/Card";
import { Container } from "../../utils/Global";

const Topic = () => {
  const { topicId } = useParams();

  let posts = null;
  const { data, loading, error } = useQuery(GET_TOPIC_POSTS, {
    variables: { topic: topicId },
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
    posts = { hasMore: false, posts: data.getTopicPosts };
  }

  return (
    <TopicContainer>
      <h1 className="topic-title"># {topicId}</h1>
      <Container>
        {posts && posts.posts.map((post) => <Card post={post} />)}
      </Container>
      <div style={{ marginTop: "50px" }} />
    </TopicContainer>
  );
};

export default Topic;
