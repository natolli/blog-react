import { gql } from "@apollo/client";

export const GET_USER_POSTS = gql`
  query GetUserPost($limit: Int!, $cursor: String, $id: Int!) {
    getUserPosts(limit: $limit, cursor: $cursor, id: $id) {
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
          lastName
          email
        }
      }
    }
  }
`;
