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

export const LOGIN = gql`
mutation Login($credentials: AuthenticateInput){
  authenticate(credentials: $credentials) {
    accessToken
  }
}
`
