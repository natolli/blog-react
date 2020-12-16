import { gql } from "@apollo/client";

export const GET_POST_COMMENTS = gql`
  query Comments($postId: Float!) {
    getPostComments(postId: $postId) {
      id
      title
      user {
        firstName
      }
    }
  }
`;
