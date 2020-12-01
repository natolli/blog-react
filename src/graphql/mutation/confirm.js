import { gql } from "@apollo/client";

export const CONFIRM = gql`
  mutation Confirm($token: String!) {
    confirmUser(token: $token)
  }
`;
