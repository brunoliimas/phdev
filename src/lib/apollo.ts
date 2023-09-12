import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.hygraph.com/v2/cllzz77go0i5c01tf4j0qedts/master",
    cache: new InMemoryCache(),
});
