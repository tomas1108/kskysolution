import { gql } from '@apollo/client';

export const QUERY_ROOM_LIST = gql`
  query RoomList($input: RoomListInput!) {
    roomList(input: $input) {
      rooms {
        id
        name
        minPrice
        dealerId
        roundTime
        videIdLarge
        videIdSmall
        dealer {
          userId
          namePlayer
        }
        players {
          userId
        }
      }
    }
  }
`;

export const QUERY_ROOM_DETAIL = gql`
  query RoomDetail($roomId: UUID!) {
    roomDetail(roomId: $roomId) {
      videIdSmall
      videIdLarge
      minPrice
      id
      dealerId
      roundTime
      name
      dealer {
        userId
        namePlayer
      }
    }
  }
`;
