import { useMutation } from "@apollo/client"
import { DELETE_REVIEW } from "../graphql/mutations"

const useDeleteReview = () => {
  const [mutate] = useMutation(DELETE_REVIEW, {
    onError: (e) => console.log(e)
  })

  const deleteReview = async (value) => {
    await mutate({ variables: {deleteReviewId: value} })
  }
  return [deleteReview]
}
export default useDeleteReview
