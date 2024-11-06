import { Timer, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';
import { WSMessageAction } from '~/@types/websocket';
import { Typography } from '~/components';
import { Skeleton } from '~/components/ui/skeleton';
import { cn } from '~/lib/utils';
import { hoverOpacityVariants, textGradientVariants } from '~/styles/variants';
import { RoomListQuery } from '~/types/generated';
import { formatCurrency } from '~/utils/common';

const { Title, Paragraph } = Typography;

type RoomDealerItemProps = {
  loading?: boolean;
  room?: RoomListQuery['roomList']['rooms'][0];
  connectionId?: string;
  sendJsonMessage?: (data: any) => void;
};

const RoomDealerItem: React.FC<RoomDealerItemProps> = ({
  loading,
  room,
  connectionId,
  sendJsonMessage
}) => {
  const onJoinRoom = useCallback(() => {
    sendJsonMessage &&
      connectionId &&
      sendJsonMessage({
        action: WSMessageAction.JOIN_ROOM,
        message: {
          action: WSMessageAction.JOIN_ROOM,
          roomId: room?.id,
          connectionId
        }
      });
  }, [connectionId, room?.id, sendJsonMessage]);

  return loading ? (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[225px] rounded-xl bg-white/30" />
      <div className="space-y-2">
        <Skeleton className="h-4 bg-white/30" />
        <Skeleton className="h-4 w-1/2 bg-white/30" />
      </div>
    </div>
  ) : (
    <Link href={`/dealer/room/${room?.id}/result`} onClick={onJoinRoom}>
      <div className={cn(hoverOpacityVariants, 'flex flex-col gap-2')}>
        <Image
          src="/images/room/default.jpg"
          alt="Room"
          width={0}
          height={300}
          sizes="100%"
          className="rounded-lg"
          style={{ width: '100%', height: 'auto' }}
        />
        <div>
          <Title variant="h4">{room?.name}</Title>
          <div className="flex flex-row gap-4">
            <Paragraph className={cn(textGradientVariants)}>
              {formatCurrency(room?.minPrice)}
            </Paragraph>
            <div className="flex flex-row items-center">
              <User size={16} />
              <span>{room?.players?.length}</span>
            </div>
            <div className="flex flex-row items-center">
              <Timer size={16} />
              <span>{room?.roundTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RoomDealerItem;
