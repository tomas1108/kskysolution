import { useMutation } from '@apollo/client';
import { useCallback } from 'react';
import { MUTATION_INSERT_USER_BET } from '~/gql/user';
import {
  InsertUserBetMutation,
  InsertUserBetMutationVariables
} from '~/types/generated';

const useInsertUserBet = () => {
  const [insertUserBet, { loading }] = useMutation<
    InsertUserBetMutation,
    InsertUserBetMutationVariables
  >(MUTATION_INSERT_USER_BET);
  const mutation = useCallback(
    ({ input }: InsertUserBetMutationVariables) =>
      insertUserBet({
        variables: {
          input
        }
      }),
    [insertUserBet]
  );
  return { insertUserBet: mutation, loading };
};

export default useInsertUserBet;
