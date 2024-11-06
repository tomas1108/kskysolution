import { gql } from '@apollo/client';

export const MUTATION_INSERT_RESULT_INTO_ROOM = gql`
  mutation InsertResultInRoom($input: InsertResultIntoRoomInput!) {
    result: insertResultInRoom(input: $input) {
      createdAt
      id
      roomId
      roundTime
    }
  }
`;

export const MUTATION_UPDATE_RESULT_ID = gql`
  mutation UpdateResultId($resultId: UUID!, $input: JSONObject!) {
    updateResultId(resultId: $resultId, input: $input) {
      id
      result
      roomId
      createdAt
    }
  }
`;

export const QUERY_GET_RESULTS = gql`
  query GetResultsInRoom($roomId: UUID!) {
    getResultsInRoom(roomId: $roomId) {
      results {
        roundTime
        roomId
        result
        id
        createdAt
      }
    }
  }
`;
