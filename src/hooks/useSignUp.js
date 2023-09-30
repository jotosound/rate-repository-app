import { useMutation } from "@apollo/client"
import { SIGNUP } from "../graphql/mutations"
import useSignIn from "./useSignIn"


const useSignUp = () => {
  const [mutate] = useMutation(SIGNUP)
  const [signIn] = useSignIn()
  const signUp = async ({ username, password}) => {
    const { data } = await mutate({
      variables: { user: { username, password}}
    })
   if (data) {
     await signIn({username, password}) 
    } 
  }
  return [signUp]
}
export default useSignUp
