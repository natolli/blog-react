import { gql } from "@apollo/client";

export const GET_SINGLE_POST = gql`
  query GetSinglePost($postId: Int!) {
    getSinglePost(postId: $postId) {
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
      }
    }
  }
`;
