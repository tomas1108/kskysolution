import { useMutation } from '@apollo/client';
import { useCallback } from 'react';
import { MUTATION_SIGN_IN } from '~/gql/auth';
import { SignInOutput, SignInInput } from '~/types/generated';

const useSignIn = () => {
  const [signIn, { loading }] = useMutation<{
    signIn: SignInOutput;
  }>(MUTATION_SIGN_IN);
  const mutation = useCallback(
    ({ input }: { input: SignInInput }) =>
      signIn({
        variables: {
          input
        }
      }),
    [signIn]
  );
  return { signIn: mutation, loading };
};

export default useSignIn;
