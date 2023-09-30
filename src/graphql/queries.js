import { gql } from "@apollo/client";

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      description
      forksCount
      fullName
      language
      ratingAverage
      reviewCount
      stargazersCount
      ownerAvatarUrl
      reviews {
        edges {
          node {
            createdAt
            id
            rating
            text
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`

export const GET_REPOSITORIES = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection){
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          id
          description
          forksCount
          fullName
          language
          ratingAverage
          reviewCount
          stargazersCount
          ownerAvatarUrl
        }
      }
    }
  }
`
