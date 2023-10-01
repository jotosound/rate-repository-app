import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useState } from 'react';

const useRepositories = () => {
  const [filter, setFilter] = useState('')
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    // orderBy: CREATED_AT | RATING_AVERAGE
    // orderDirection: ASC | DESC 
    variables: { orderBy: 'CREATED_AT', orderDirection: 'DESC', searchKeyword: ''}, 
    
  })
  const getRepositories = (value) => {
    const obj = {
      best: {
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'DESC'
      },
      worst: {
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'ASC',
      },
      latest: {
        orderBy: 'CREATED_AT',
        orderDirection: 'DESC'
      },
    }
    console.log(value)
    if (typeof value === 'object' && 'searchKeyword' in value) {
      refetch({searchKeyword: value.searchKeyword})
    } else {
      const filterObj = value ? obj[value] : obj.latest 

      setFilter(value)
      refetch({orderBy: filterObj.orderBy, orderDirection: filterObj.orderDirection}) 

    }
        
  }
  return { repositories: data?.repositories, loading, refetch: getRepositories, filter };
};

export default useRepositories;
