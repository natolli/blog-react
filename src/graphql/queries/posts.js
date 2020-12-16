import { gql } from "@apollo/client";

export const POSTS = gql`
  query POSTS($limit: Int!, $cursor: String) {
    posts(limit: $limit, cursor: $cursor) {
      hasMore
      posts {
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
  }
`;
