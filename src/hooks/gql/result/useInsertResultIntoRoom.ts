import { useMutation } from '@apollo/client';
import { useCallback } from 'react';
import { MUTATION_INSERT_RESULT_INTO_ROOM } from '~/gql/result';
import { InsertResultIntoRoomOutput } from '~/types/generated';

const useInsertResultIntoRoom = () => {
  const [insertResultIntoRoom, { loading }] = useMutation<{
    result: InsertResultIntoRoomOutput;
  }>(MUTATION_INSERT_RESULT_INTO_ROOM);
  const mutation = useCallback(
    ({ input }: any) =>
      insertResultIntoRoom({
        variables: {
          input
        }
      }),
    [insertResultIntoRoom]
  );
  return { insertResultIntoRoom: mutation, loading };
};

export default useInsertResultIntoRoom;
