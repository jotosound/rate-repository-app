import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem" 
import ReviewItem from "./ReviewItem";
import { GET_REPOSITORY } from "../graphql/queries";
import { ActivityIndicator, View, FlatList } from "react-native";
import { ItemSeparator } from "./RepositoryList";
const SingleRepository = () => {
  // ...
  const { id } = useParams()
  const { data, loading } = useQuery(GET_REPOSITORY, { 
    variables: { repositoryId: id ? id : ''
    } 
  })
  const repository = data?.repository 
  const reviews = data?.repository?.reviews?.edges.map(x => x.node)
  
  if (loading) return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
    )
  
  console.log(repository)
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem item={repository} />}
      ItemSeparatorComponent={ItemSeparator}
      // ...
    />
  );
};
export default SingleRepository
