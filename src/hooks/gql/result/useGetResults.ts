import { useQuery } from '@apollo/client';
import { QUERY_GET_RESULTS } from '~/gql/result';
import {
  GetResultsInRoomQuery,
  GetResultsInRoomQueryVariables
} from '~/types/generated';

const useGetResults = (roomId: string) => {
  const { data, loading, refetch } = useQuery<
    GetResultsInRoomQuery,
    GetResultsInRoomQueryVariables
  >(QUERY_GET_RESULTS, {
    skip: !roomId,
    variables: {
      roomId
    }
  });

  return {
    results: data?.getResultsInRoom.results,
    loading,
    refetch
  };
};

export default useGetResults;
