import { useApolloClient, useMutation } from '@apollo/client'
import { LOGIN } from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'
const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN)
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    })
    await authStorage.setAccessToken(data.authenticate.accessToken)
    apolloClient.resetStore()
  }
  return [signIn, result]
}

export default useSignIn
