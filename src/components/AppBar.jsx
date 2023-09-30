import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";
import useUser from "../hooks/useUser";
import useSignOut from "../hooks/useSignOut";

const AppTabAction = ({ children, ...props }) => {
  return (
    <Link {...props}>
      <Text
        style={{ color: "white", padding: 5 }}
        fontWeight="bold"
        fontSize="subheading"
      >
        {children}
      </Text>
    </Link>
  );
};

const appTabStyles = StyleSheet.create({
  tab: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 10,
    paddingTop: 60,
  },
});

const AppTab = () => {
  const { me } = useUser();
  const [signOut] = useSignOut();
  return (
    <View style={appTabStyles.tab}>
      <ScrollView horizontal>
        <AppTabAction to="/">Repositories</AppTabAction>
        {!me ? <AppTabAction to="/signin">Sign In</AppTabAction> : (
          <>
            <AppTabAction to="/review">Create a Review</AppTabAction>
            <AppTabAction onPress={signOut}>Sign Out</AppTabAction>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundColor,
    height: 100,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <AppTab />
      </View>
    </View>
  );
};

export default AppBar;
