import { FlatList, View, Pressable, Alert } from "react-native"
import Text from "./Text"
import ReviewItem from './ReviewItem'
import { ItemSeparator } from "./RepositoryList"
import useUser from '../hooks/useUser'
import { ActivityIndicator } from "react-native-paper"

const Reviews = () => {
  const { me, loading, refetch } = useUser()
  const reviews = me?.reviews?.edges?.map(edge => edge.node) 
  if (me && !me.reviews) {
    refetch({includeReviews: true})
  } 
  if (loading) return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
    )
  return (
    <FlatList 
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <ReviewItem review={item} />}
    />
  )
}

export default Reviews
