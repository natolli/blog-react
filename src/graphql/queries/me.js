import { gql } from "@apollo/client";

export const ME = gql`
  query ME {
    me {
      id
      email
      firstName
      lastName
    }
  }
`;
