import { useQuery } from "@apollo/client"
import { ME } from "../graphql/queries"


const useUser = () => {
  const { data } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
  })

  return { me: data?.me }
} 

export default useUser
