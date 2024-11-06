import { useQuery } from '@apollo/client';
import { QUERY_ROOM_DETAIL } from '~/gql/room';
import { RoomDetailQuery, RoomDetailQueryVariables } from '~/types/generated';

const useRoomDetail = (roomId: string) => {
  const { data, loading, ...rest } = useQuery<
    RoomDetailQuery,
    RoomDetailQueryVariables
  >(QUERY_ROOM_DETAIL, {
    skip: !roomId,
    variables: {
      roomId
    }
  });

  return {
    room: data?.roomDetail,
    loading,
    ...rest
  };
};

export default useRoomDetail;
