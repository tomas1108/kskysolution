import { gql } from '@apollo/client';

export const QUERY_USER_INFO = gql`
  query UserInfo {
    userInfo {
      user {
        userId
        phone
        createdAt
        namePlayer
        countryCode
        walletMoney
      }
    }
  }
`;

export const MUTATION_INSERT_USER_BET = gql`
  mutation InsertUserBet($input: InsertUserBetInput!) {
    insertUserBet(input: $input) {
      userId
      roomId
      id
      createdAt
    }
  }
`;

export const QUERY_USERS_BET_AGGREGATE_BY_ROUND_ID = gql`
  query UsersBetAggregateByRoundId($roundId: UUID!) {
    usersBetAggregateByRoundId(roundId: $roundId) {
      player3 {
        count
        totalMoney
      }
      player2 {
        count
        totalMoney
      }
      player1 {
        count
        totalMoney
      }
    }
  }
`;
