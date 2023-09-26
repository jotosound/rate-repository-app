import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NativeRouter } from 'react-router-native';

import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
import Main from './src/components/Main';
const apolloClient = createApolloClient()
export default function App() {
  console.log(Constants.manifest)
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
