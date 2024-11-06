import { gql } from '@apollo/client';

export const MUTATION_DELETED_USER_BETS_BY_ROUND_ID = gql`
  mutation DeletedUserBetsByRoundId($input: DeletedUserBetsByRoundIdInput!) {
    deletedUserBetsByRoundId(input: $input) {
      isRefund
      refundMoney
    }
  }
`;
