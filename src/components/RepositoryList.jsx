import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories 
    ? repositories.edges?.map(edge => edge.node)
    : []

  
  
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem item={item} /> 
      )} 
    />
  );
}

const RepositoryList = () => {
  const { repositories, loading } = useRepositories() 
  
  if (loading) return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  )
  
  return <RepositoryListContainer repositories={repositories} />
  
};

export default RepositoryList;
