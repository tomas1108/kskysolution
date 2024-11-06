import { useMutation } from '@apollo/client';
import { useCallback } from 'react';
import { MUTATION_DELETED_USER_BETS_BY_ROUND_ID } from '~/gql/bet';
import {
  DeletedUserBetsByRoundIdMutation,
  DeletedUserBetsByRoundIdMutationVariables
} from '~/types/generated';

const useDeletedUserBetsByRoundId = () => {
  const [deletedUserBetsByRoundId, { loading }] = useMutation<
    DeletedUserBetsByRoundIdMutation,
    DeletedUserBetsByRoundIdMutationVariables
  >(MUTATION_DELETED_USER_BETS_BY_ROUND_ID);
  const mutation = useCallback(
    ({ input }: any) =>
      deletedUserBetsByRoundId({
        variables: {
          input
        }
      }),
    [deletedUserBetsByRoundId]
  );
  return { deletedUserBetsByRoundId: mutation, loading };
};

export default useDeletedUserBetsByRoundId;
