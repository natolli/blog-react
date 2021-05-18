import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      error
      user {
        id
        email
        firstName
        lastName
      }
      lik
    }
  }
`;
