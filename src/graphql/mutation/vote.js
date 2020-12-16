import { gql } from "@apollo/client";

export const VOTE = gql`
  mutation Vote($value: Float!, $postId: Float!) {
    vote(value: $value, postId: $postId)
  }
`;
