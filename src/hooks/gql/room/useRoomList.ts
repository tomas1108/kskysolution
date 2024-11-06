import { useQuery } from '@apollo/client';
import { QUERY_ROOM_LIST } from '~/gql/room';
import { RoomListQuery, RoomListQueryVariables } from '~/types/generated';

const useRoomList = ({ limit, offset }: { limit: number; offset: number }) => {
  const { data, loading, ...rest } = useQuery<
    RoomListQuery,
    RoomListQueryVariables
  >(QUERY_ROOM_LIST, {
    skip: !limit,
    variables: {
      input: {
        limit,
        offset
      }
    }
  });

  return {
    rooms: data?.roomList?.rooms ?? [],
    loading,
    ...rest
  };
};

export default useRoomList;
