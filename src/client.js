import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { relayStylePagination } from "@apollo/client/utilities";

const link = new createUploadLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          comments: relayStylePagination(),
        },
      },
    },
  }),
});

export default client;
