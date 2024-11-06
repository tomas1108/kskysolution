import { gql } from '@apollo/client';

export const MUTATION_INSERT_TRANSACTION = gql`
  mutation InsertTransaction($input: InsertTransactionInput!) {
    transaction: insertTransaction(input: $input) {
      id
      status
      money
    }
  }
`;
