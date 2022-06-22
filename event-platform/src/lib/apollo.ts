import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4otp95d10np01z4g0f7349d/master',
  cache: new InMemoryCache(),
});