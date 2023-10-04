import { gql } from "@apollo/client";

export const ME = gql`
  query getCurrentUser($includeReviews: Boolean = false){
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            createdAt
            id
            rating
            text
            repository {
              id
            }
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

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!, $first: Int, $after: String) {
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
      reviews(first: $first, after: $after) {
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
        cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`

export const GET_REPOSITORIES = gql`
  query Repositories($first: Int, $after: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String){
    repositories(first: $first, after: $after, orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`
