import { useMutation } from '@apollo/client';
import { useCallback } from 'react';
import { MUTATION_INSERT_TRANSACTION } from '~/gql/transaction';
import {
  InsertTransactionMutation,
  InsertTransactionMutationVariables
} from '~/types/generated';

const useInsertTransaction = () => {
  const [insertTransaction, { loading }] = useMutation<
    InsertTransactionMutation,
    InsertTransactionMutationVariables
  >(MUTATION_INSERT_TRANSACTION);
  const mutation = useCallback(
    ({ input }: InsertTransactionMutationVariables) =>
      insertTransaction({
        variables: {
          input
        }
      }),
    [insertTransaction]
  );
  return { insertTransaction: mutation, loading };
};

export default useInsertTransaction;
