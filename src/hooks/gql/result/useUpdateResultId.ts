import { useMutation } from '@apollo/client';
import { useCallback } from 'react';
import { MUTATION_UPDATE_RESULT_ID } from '~/gql/result';
import {
  UpdateResultIdMutation,
  UpdateResultIdMutationVariables,
  MutationUpdateResultIdArgs
} from '~/types/generated';

const useUpdateResultId = () => {
  const [updateResultId, { loading }] = useMutation<
    UpdateResultIdMutation,
    UpdateResultIdMutationVariables
  >(MUTATION_UPDATE_RESULT_ID);
  const mutation = useCallback(
    ({ input, resultId }: MutationUpdateResultIdArgs) =>
      updateResultId({
        variables: { resultId, input }
      }),
    [updateResultId]
  );
  return { updateResultId: mutation, loading };
};

export default useUpdateResultId;
