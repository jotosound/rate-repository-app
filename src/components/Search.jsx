import { useState } from "react"
import { View } from "react-native"
import { Searchbar } from "react-native-paper"
const Search = ({ refetch }) => {
  const [query, setQuery] = useState('')
  const [searchId, setSerchId] = useState(null) 
  
  const onSearch = (value) => {
    const id = setTimeout(() => {
      console.log(value)
      refetch({searchKeyword: value})
      setSerchId(null)
    }, 1500);
    setQuery(value)
    setSerchId(id)
  }

  return (
    <View style={{ margin: 20}}>
    <Searchbar 
      style={{borderRadius: 2}}
      placeholder="Search"
      onChangeText={(value)=> {
        clearTimeout(searchId)
        onSearch(value)
      }}
      value={query}
    />
    </View>
  )
}

export default Search
