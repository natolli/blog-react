import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
  mutation AddComment($postId: Float!, $title: String!) {
    createComment(postId: $postId, title: $title) {
      id
      title
      user {
        firstName
      }
    }
  }
`;
