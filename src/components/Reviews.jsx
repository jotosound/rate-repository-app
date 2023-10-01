import { FlatList, View, Pressable, Alert } from "react-native"
import Text from "./Text"
import ReviewItem from './ReviewItem'
import { ItemSeparator } from "./RepositoryList"
import useUser from '../hooks/useUser'
import { ActivityIndicator } from "react-native-paper"
import theme from "../theme"
import { useNavigate } from "react-router-native"
import useDeleteReview from "../hooks/useDeleteReview"
const ItemContainer = ({ review, onDelete }) => {
  const navigate = useNavigate()
  const alert = () => {
    Alert.alert('Delete Review?', 'Are you sure you want to delete your review?',[
    {
      text: 'Cancel',
      onPress: () => console.log('canceled'),
      style: 'cancel',
    },
    {
      text: 'Delete',
      onPress: () => onDelete(review.id),
    }
  ])

  }  
  return (
    <View style={{backgroundColor: 'white', borderRadius: 5}} >
      <ReviewItem review={review} />
    <View style={{ flexDirection: 'row', flexGrow: 1, justifyContent: 'space-around'}}>
        <Pressable
        style={{
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
          height: 60,
          backgroundColor: theme.colors.primary,
          borderRadius: 5,
          flexGrow: 1,
        }}
        onPress={() => navigate(`/repositories/${review.repository.id}`)}
      >
        <Text
          style={{ color: "white" }}
          fontSize="subheading"
          fontWeight="bold"
        >
         View Repository 
        </Text>
      </Pressable>
      <Pressable
        style={{
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
          height: 60,
          backgroundColor: 'red',
          borderRadius: 5,
          flexGrow: 1,
        }}
        onPress={alert}
      >
        <Text
          style={{ color: "white" }}
          fontSize="subheading"
          fontWeight="bold"
        >
        Delete Review 
        </Text>
      </Pressable>
    </View>
    </View>
  )
}

const Reviews = () => {
  const { me, loading, refetch } = useUser()
  const [deleteReview] = useDeleteReview()
  const reviews = me?.reviews?.edges?.map(edge => edge.node)

  const onDelete = (value) => {
    deleteReview(value)
    refetch({includeReviews: true})
  }
  if (reviews?.length === 0) {
    return <View><Text>No reviews. Review some repositories.</Text></View>
  }
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
      renderItem={({ item }) => <ItemContainer review={item} onDelete={onDelete} />}
    />
  )
}

export default Reviews
