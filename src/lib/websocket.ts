export const __webSocketConnectionIds: Set<string> = new Set();

export const clearWebsocketConnectionIds = () => {
  __webSocketConnectionIds.clear();

  (window as any).__webSocketConnectionIds = __webSocketConnectionIds;
};

export const setWebsocketConnectionIds = (id: string) => {
  __webSocketConnectionIds.add(id);

  (window as any).__webSocketConnectionIds = __webSocketConnectionIds;
};
