import { gql } from '@apollo/client';

export const MUTATION_SIGN_IN = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      accessToken
      accessTokenExpiresIn
      refreshToken
      refreshTokenId
      user {
        id
        role
        namePlayer
        walletMoney
      }
    }
  }
`;

export const MUTATION_SIGN_UP = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      userId
      createdAt
    }
  }
`;
