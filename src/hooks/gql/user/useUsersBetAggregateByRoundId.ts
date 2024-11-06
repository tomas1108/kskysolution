import { useQuery } from '@apollo/client';
import { QUERY_USERS_BET_AGGREGATE_BY_ROUND_ID } from '~/gql/user';
import {
  UsersBetAggregateByRoundIdQuery,
  UsersBetAggregateByRoundIdQueryVariables
} from '~/types/generated';

const useUsersBetAggregateByRoundId = (roundId: string) => {
  const { data, loading, refetch } = useQuery<
    UsersBetAggregateByRoundIdQuery,
    UsersBetAggregateByRoundIdQueryVariables
  >(QUERY_USERS_BET_AGGREGATE_BY_ROUND_ID, {
    skip: !roundId,
    variables: {
      roundId
    }
  });
  return {
    aggregate: data?.usersBetAggregateByRoundId,
    loading,
    refetch
  };
};

export default useUsersBetAggregateByRoundId;
