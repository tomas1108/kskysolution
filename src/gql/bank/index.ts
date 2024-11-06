import { gql } from '@apollo/client';

export const QUERY_BANKS = gql`
  query Banks {
    banks {
      id
      name
    }
  }
`;
