import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";
const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    await mutate({ variables: {credentials: {username, password}}})
  };
  return [signIn, result];
};

export default useSignIn
