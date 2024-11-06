export enum WSMessageAction {
  SEND_MESSAGE = 'sendMessage',
  ADD_CHANNEL = 'addChannel',
  DEFAULT = 'default',
  SEND_RESULT = 'sendResult',
  INSERT_ROUND = 'insertRound',
  PING = 'ping',
  INSERT_USER_BET = 'insertUserBet',
  JOIN_ROOM = 'joinRoom',
  LEAVE_ROOM = 'leaveRoom'
}

export enum WSChannel {
  DEFAULT = 'default',
  ROOM = 'room'
}
