import { FlatList, View, StyleSheet, ActivityIndicator, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import {Picker} from '@react-native-picker/picker';
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const ItemSeparator = () => <View style={styles.separator} />;

const FilterSelect = ({ filter, refetch }) => {
   
  return (
    <Picker
      selectedValue={filter}
      onValueChange={(value) => refetch(value)}
    > 
      <Picker.Item label='Latest Reposities' value='latest'/>
      <Picker.Item label='Highest Rated Reposities' value='best'/>
      <Picker.Item label='Lowest Rated Reposities' value='worst'/>
    </Picker>
  )
}

export const RepositoryListContainer = ({ repositories, filter, refetch }) => {
  const repositoryNodes = repositories 
    ? repositories.edges?.map(edge => edge.node)
    : []

  
  const navigate = useNavigate() 
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <FilterSelect filter={filter} refetch={refetch}/>}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
          <RepositoryItem item={item} /> 
        </Pressable>
      )} 
    />
  );
}

const RepositoryList = () => {
  const { repositories, loading, refetch, filter } = useRepositories() 
  
  if (loading) return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  )
  
  return <RepositoryListContainer repositories={repositories} refetch={refetch} filter={filter} />
  
};

export default RepositoryList;
