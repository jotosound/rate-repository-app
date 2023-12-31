import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      repository {
        id
      }
    }
  }
`

export const DELETE_REVIEW = gql`
mutation DeleteReview($deleteReviewId: ID!) {
  deleteReview(id: $deleteReviewId)
}
`

export const LOGIN = gql`
mutation Login($credentials: AuthenticateInput){
  authenticate(credentials: $credentials) {
    accessToken
  }
}
`

export const SIGNUP = gql`
mutation CreateUser($user: CreateUserInput) {
  createUser(user: $user) {
    id
    username
  }
}
`
