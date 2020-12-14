import { gql } from "@apollo/client";

export const POSTS = gql`
  query POSTS($limit: Int!, $cursor: String) {
    posts(limit: $limit, cursor: $cursor) {
      hasMore
      posts {
        title
        description
        imageName
        topics
        user {
          id
          firstName
        }
      }
    }
  }
`;
