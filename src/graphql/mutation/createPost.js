import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation CreatePost($picture: Upload!, $input: CreatePostInput!) {
    createPost(picture: $picture, input: $input) {
      id
      title
      description
      imageName
      userId
      topics
    }
  }
`;
