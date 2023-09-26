import { View, Image, StyleSheet } from "react-native"
import Text from "./Text"
import theme from "../theme"

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  item: {
    paddingBottom: 8,
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    width: 'auto',
  },
  langChip: { 
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 3,
    marginBottom: 8,
  },
  langText: {
    color: 'white',
    padding: 5,
  }
})

const ItemHeader = ({ item }) => {
  return (
    <View style={headerStyles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.tinyLogo} source={{uri:item.ownerAvatarUrl}}/>
      </View>
      <View >
        <View style={headerStyles.item}>
          <Text fontWeight='bold' fontSize='subheading'>{item.fullName}</Text>
        </View>
        <View style={headerStyles.item}>
          <Text fontSize='subheading'>{item.description}</Text>
        </View>
        <View style={headerStyles.langChip}>
          <Text fontSize='subheading' style={headerStyles.langText}>{item.language}</Text>
        </View>
      </View>
    </View>
  ) 
}

const parseStat = (stat) => {
  if (Number(stat) >= 1000) {
    const num = Number(stat) / 1000
    return num.toPrecision(3) + 'k'
  }
  return stat
}

const statStyles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    justifyContent: 'space-around'
  },
  item: { 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
})

const ItemStats = ({ item }) => {

  return (
    <View style={statStyles.container}>
    <View style={statStyles.item}>
      <Text fontWeight='bold' fontSize='subheading'>{parseStat(item.stargazersCount)}</Text>
      <Text fontSize='subheading'>Stars</Text>
    </View>
    <View style={statStyles.item}>
      <Text fontWeight='bold' fontSize='subheading'>{parseStat(item.forksCount)}</Text>
      <Text fontSize='subheading'>Forks</Text>
      </View>
<View style={statStyles.item}>
      <Text fontWeight='bold' fontSize='subheading'>{parseStat(item.reviewCount)}</Text>
      <Text fontSize='subheading'>Reviews</Text>
    </View>
    <View style={statStyles.item}>
      <Text fontWeight='bold' fontSize='subheading'>{parseStat(item.ratingAverage)}</Text>
      <Text fontSize='subheading'>Rating</Text>
    </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: 'white',
    borderRadius: 10,
    flexGrow: 0, 
    alignItems: 'stretch', 
    padding: 10
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  logoContainer: {
    flexGrow: 0,
    paddingRight: 15,
  }
})

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <ItemHeader item={item} />
      <ItemStats item={item} /> 
    </View>
  )
}

export default RepositoryItem
