import { gql } from "@apollo/client";

export const GET_TOPIC_POSTS = gql`
  query GetTopics($topic: Topic!) {
    getTopicPosts(topic: $topic) {
      id
      title
      description
      imageName
      topics
      points
      createdAt
      comments {
        id
        title
        user {
          id
          firstName
        }
      }
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;
