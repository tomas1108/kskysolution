import useWebSocket, { ReadyState } from 'react-use-websocket';
import { WSMessageAction } from '~/@types/websocket';
import auth from '~/utils/auth';
import useAuth from './useAuth';
import { useRef } from 'react';

const useAppWebSocket = (channel = '', isKeepConnect = true) => {
  const connectionId = useRef<string | null>(null);
  const isConnect = isKeepConnect;

  const { user } = useAuth();

  const { lastJsonMessage, readyState, sendJsonMessage } = useWebSocket(
    process.env.API_ENDPOINT_WEB_SOCKET!,
    {
      share: true,
      queryParams: {
        authorization: auth.getToken || '',
        customChanel: channel,
        userId: user?.id
      },
      heartbeat: isConnect
        ? {
            message: JSON.stringify({
              action: WSMessageAction.PING,
              message: {
                action: WSMessageAction.PING,
                userId: user?.id
              }
            }),
            returnMessage: 'pong',
            timeout: 60000,
            interval: 45000
          }
        : undefined,
      reconnectAttempts: 2,
      reconnectInterval: (attemptNumber) =>
        Math.min(Math.pow(2, attemptNumber) * 1000, 10000),
      onOpen: () => {
        console.log('ws connected!');
        sendJsonMessage({
          action: WSMessageAction.ADD_CHANNEL,
          message: {
            action: WSMessageAction.ADD_CHANNEL,
            userId: user?.id
          }
        });
      },
      onClose: () => {
        // clearWebsocketConnectionIds();
        console.log('ws disconnected!');
      },
      shouldReconnect: () => isConnect,
      filter: (message) => {
        const data = JSON.parse(message.data);
        const payload = JSON.parse(data?.Data ?? '{}');
        if (data.action === WSMessageAction.ADD_CHANNEL) {
          connectionId.current = payload.connectionId;
        }
        return true;
      }
    }
  );

  return {
    isWebSocketOpen: readyState === ReadyState.OPEN,
    sendJsonMessage,
    lastJsonMessage,
    connectionId: connectionId.current
  };
};

export default useAppWebSocket;
