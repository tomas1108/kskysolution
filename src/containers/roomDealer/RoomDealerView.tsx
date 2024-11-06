'use client';

import { useRoomList } from '~/hooks/gql/room';
import { RoomDealerItem } from './components';
import { isEmpty } from 'lodash';
import { useUser } from '~/hooks/context/userContext';

type RoomDealerViewProps = {};

const RoomDealerView: React.FC<RoomDealerViewProps> = () => {
  const { connectionId, sendJsonMessage } = useUser();
  const { rooms, loading } = useRoomList({
    limit: 30,
    offset: 0
  });

  return (
    <>
      <div className="grid gap-x-4 gap-y-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {isEmpty(rooms)
          ? Array.from({ length: 15 }).map((_, index) => (
              <RoomDealerItem key={index} loading={loading} />
            ))
          : rooms.map((room) => (
              <RoomDealerItem
                sendJsonMessage={sendJsonMessage}
                connectionId={connectionId}
                key={room.id}
                room={room}
                loading={loading}
              />
            ))}
      </div>
    </>
  );
};

export default RoomDealerView;
