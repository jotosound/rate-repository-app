import { StyleSheet, View } from "react-native"
import Text from "./Text"
import theme from "../theme"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexShrink: 1, 
    flexDirection: 'row',
    padding: 10,
    width: '100',
    backgroundColor: 'white'
  },
  rating: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderColor: theme.colors.primary,
    borderRadius: 50 / 2,
    borderStyle: 'solid',
    borderWidth: 4
  } 
})

const parseDate = (d) => {
  const newDate = new Date(d)
  const options = {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  }
  // default expo android js engine does not include Intl package
  // will error. external dependency needed :(
  return newDate.toLocaleDateString(undefined, options).replaceAll('/', '.')
  // return new Intl.DateTimeFormat(undefined, options).format(newDate).replaceAll('/', '.');
}

const ReviewItem = ({ review }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.rating}>
          <Text fontSize='subheading' fontWeight='bold' >{' '}{review.rating} </Text>
        </View>
        <View style={{ paddingLeft: 15}}>
          <Text fontSize='subheading' fontWeight='bold'>{review.user.username}</Text>
          <Text fontSize='subheading'>{parseDate(review.createdAt)}</Text>
          <View style={{ width: 400, flexGrow: 0, flex: 1}}>
            <Text >{review.text}</Text>
          </View>
        </View>
         
      </View>
      
    </View>
  )
}
export default ReviewItem
