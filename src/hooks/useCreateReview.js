import { useMutation } from "@apollo/client"
import { CREATE_REVIEW } from "../graphql/mutations"

const useCreateReview = () => {
  const [mutate, {data, loading, error}] = useMutation(CREATE_REVIEW, {
    onError: (error) => {
      throw new Error(error.message)
    }
  })

  const submitReview = async (review) => {
    const { ownerName, rating, repositoryName, text} = review
    console.log('called')
    await mutate({variables: {review: {
      ownerName,
      rating: Number(rating),
      repositoryName,
      text
    }}})
    return data 
  }
  return [submitReview, data, loading, error]
}
export default useCreateReview
