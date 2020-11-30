import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      error
      user {
        id
        email
        firstName
        lastName
      }
    }
  }
`;
