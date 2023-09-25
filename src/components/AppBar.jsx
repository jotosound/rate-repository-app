import { Pressable, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const AppTabAction = ({ children, ...props }) => {
  return (
    <Pressable {...props}>
    <Text style={{ color: 'white'}} fontWeight='bold' fontSize='subheading'>{children}</Text>
  </Pressable>
  )
}

const appTabStyles = StyleSheet.create({
  tab: {
    // flexDirection: 'column-reverse',
    paddingLeft: 10,
    paddingTop: 60,
  }
})

const AppTab = () => {
  return (
    <View style={appTabStyles.tab}>
      <AppTabAction>Repositories</AppTabAction>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundColor,
    height: 100,
  },
  
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
    <View style={styles.tab}>
      <AppTab />
    </View>
    </View>;
};

export default AppBar;
