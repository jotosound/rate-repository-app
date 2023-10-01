import { FlatList, View, StyleSheet, ActivityIndicator, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import {Picker} from '@react-native-picker/picker';
import Search from './Search'
import React from 'react';
import theme from '../theme';
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const ItemSeparator = () => <View style={styles.separator} />;

const FilterSelect = ({ filter, refetch }) => {
   
  return (
    <Picker
      style={{height: 50, marginLeft: 10}}
      selectedValue={filter}
      onValueChange={(value) => refetch(value)}
    > 
      <Picker.Item style={{ fontSize: theme.fontSizes.subheading}} label='Latest Reposities' value='latest'/>
      <Picker.Item label='Highest Rated Reposities' value='best'/>
      <Picker.Item label='Lowest Rated Reposities' value='worst'/>
    </Picker>
  )
}

const RepositoryListHeader = ({ filter, refetch }) => {
  return (
    <View >
      <Search refetch={refetch}/>
      <FilterSelect filter={filter} refetch={refetch}/>
    </View>
  )
}

const ItemContainer = ({ item }) => {
  const navigate = useNavigate() 
  
  return (
      <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
          <RepositoryItem item={item} /> 
      </Pressable>
  )
}

class RepositoryListContainer extends React.Component {
  
  renderHeader = () => {
    const { filter, refetch } = this.props
    return <RepositoryListHeader filter={filter} refetch={refetch}/>
  }
  
  render() {
    
    const repositoryNodes = this.props.repositories 
      ? this.props.repositories.edges?.map(edge => edge.node)
      : []
    
    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={this.renderHeader}
        renderItem={({ item }) => (
          <ItemContainer item={item} />    
        )} 
      />
    );
  }
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
