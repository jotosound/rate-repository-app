// import Constants from 'expo-components'
import { StyleSheet, View } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import theme from '../theme';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import ReviewForm from './ReviewForm';
import SignUp from './SignUp';
import Reviews from './Reviews';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackGround,
    flexGrow: 1,
    flexShrink: 1,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/review' element={<ReviewForm />} />
        <Route path='/my-reviews' element={<Reviews />} />
        <Route path='/repositories/:id' element={<SingleRepository />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View> 
  )
}

export default Main
