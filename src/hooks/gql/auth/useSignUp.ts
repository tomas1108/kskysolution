import { useMutation } from '@apollo/client';
import { useCallback } from 'react';
import { MUTATION_SIGN_UP } from '~/gql/auth';
import { SignInOutput, SignUpInput } from '~/types/generated';

const useSignUp = () => {
  const [signUp, { loading }] = useMutation<{
    signUp: SignInOutput;
  }>(MUTATION_SIGN_UP);
  const mutation = useCallback(
    ({ input }: { input: SignUpInput }) =>
      signUp({
        variables: {
          input
        }
      }),
    [signUp]
  );
  return { signUp: mutation, loading };
};

export default useSignUp;
