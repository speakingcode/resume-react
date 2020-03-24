import ApolloClient from 'apollo-boost';

export const createApolloClient = () => {
  return new ApolloClient({
      uri: 'http://resume-api-rails.herokuapp.com/graphql'
  })
}
