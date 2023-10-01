import { useQuery } from "@apollo/client"
import { ME } from "../graphql/queries"


const useUser = () => {
  const { data, loading, refetch } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
  })

  return { me: data?.me, refetch, loading }
} 

export default useUser
