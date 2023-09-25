// import Constants from 'expo-components'
import Constants from 'expo-constants'
import { StyleSheet, Text, View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8',
    flexGrow: 1,
    flexShrink: 1,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View> 
  )
}

export default Main
