'use client';

import { useRoomList } from '~/hooks/gql/room';
import { RoomItem } from './components';
import { isEmpty } from 'lodash';
import { HeaderBack } from '~/components/layout';
import { useCustomRouter } from '~/hooks';
import { useCallback } from 'react';
import { useUser } from '~/hooks/context/userContext';

type RoomViewProps = {};

const RoomView: React.FC<RoomViewProps> = () => {
  const { connectionId, sendJsonMessage } = useUser();
  const { push } = useCustomRouter();
  const { rooms, loading } = useRoomList({
    limit: 30,
    offset: 0
  });

  const onGoBack = useCallback(() => {
    push('/');
  }, []);

  return (
    <>
      <HeaderBack onGoBack={onGoBack} />
      <div className="grid gap-x-4 gap-y-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {isEmpty(rooms)
          ? Array.from({ length: 15 }).map((_, index) => (
              <RoomItem key={index} loading={loading} />
            ))
          : rooms.map((room) => (
              <RoomItem
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

export default RoomView;
