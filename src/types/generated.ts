import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  AccountNumber: { input: any; output: any };
  BigInt: { input: any; output: any };
  Byte: { input: any; output: any };
  CountryCode: { input: any; output: any };
  Cuid: { input: any; output: any };
  Currency: { input: any; output: any };
  DID: { input: any; output: any };
  Date: { input: any; output: any };
  DateTime: { input: any; output: any };
  DateTimeISO: { input: any; output: any };
  DeweyDecimal: { input: any; output: any };
  Duration: { input: any; output: any };
  EmailAddress: { input: any; output: any };
  GUID: { input: any; output: any };
  HSL: { input: any; output: any };
  HSLA: { input: any; output: any };
  HexColorCode: { input: any; output: any };
  Hexadecimal: { input: any; output: any };
  IBAN: { input: any; output: any };
  IP: { input: any; output: any };
  IPCPatent: { input: any; output: any };
  IPv4: { input: any; output: any };
  IPv6: { input: any; output: any };
  ISBN: { input: any; output: any };
  ISO8601Duration: { input: any; output: any };
  JSON: { input: any; output: any };
  JSONObject: { input: any; output: any };
  JWT: { input: any; output: any };
  LCCSubclass: { input: any; output: any };
  Latitude: { input: any; output: any };
  LocalDate: { input: any; output: any };
  LocalDateTime: { input: any; output: any };
  LocalEndTime: { input: any; output: any };
  LocalTime: { input: any; output: any };
  Locale: { input: any; output: any };
  Long: { input: any; output: any };
  Longitude: { input: any; output: any };
  MAC: { input: any; output: any };
  NegativeFloat: { input: any; output: any };
  NegativeInt: { input: any; output: any };
  NonEmptyString: { input: any; output: any };
  NonNegativeFloat: { input: any; output: any };
  NonNegativeInt: { input: any; output: any };
  NonPositiveFloat: { input: any; output: any };
  NonPositiveInt: { input: any; output: any };
  ObjectID: { input: any; output: any };
  PhoneNumber: { input: any; output: any };
  Port: { input: any; output: any };
  PositiveFloat: { input: any; output: any };
  PositiveInt: { input: any; output: any };
  PostalCode: { input: any; output: any };
  RGB: { input: any; output: any };
  RGBA: { input: any; output: any };
  RoutingNumber: { input: any; output: any };
  SESSN: { input: any; output: any };
  SafeInt: { input: any; output: any };
  SemVer: { input: any; output: any };
  Time: { input: any; output: any };
  TimeZone: { input: any; output: any };
  Timestamp: { input: any; output: any };
  URL: { input: any; output: any };
  USCurrency: { input: any; output: any };
  UUID: { input: any; output: any };
  UnsignedFloat: { input: any; output: any };
  UnsignedInt: { input: any; output: any };
  UtcOffset: { input: any; output: any };
  Void: { input: any; output: any };
}

export interface AggregateItem {
  __typename?: 'AggregateItem';
  count: Scalars['Int']['output'];
  totalMoney: Scalars['Int']['output'];
}

export interface ApproveTransactionOutput {
  __typename?: 'ApproveTransactionOutput';
  transactionId: Scalars['UUID']['output'];
}

export interface BankItem {
  __typename?: 'BankItem';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
}

export interface Dealer {
  __typename?: 'Dealer';
  namePlayer: Scalars['String']['output'];
  userId: Scalars['UUID']['output'];
}

export interface DeletedUserBetsByRoundIdInput {
  roomId: Scalars['UUID']['input'];
  roundId: Scalars['UUID']['input'];
}

export interface DeletedUserBetsByRoundIdOutput {
  __typename?: 'DeletedUserBetsByRoundIdOutput';
  affectedRows?: Maybe<Scalars['Int']['output']>;
  isRefund?: Maybe<Scalars['Boolean']['output']>;
  refundMoney?: Maybe<Scalars['Int']['output']>;
  userBets?: Maybe<Array<ReturningUserBet>>;
}

export interface GetResultsInRoomOutput {
  __typename?: 'GetResultsInRoomOutput';
  results: Array<ResultItem>;
}

export interface InsertProviderInput {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
}

export interface InsertProviderOutput {
  __typename?: 'InsertProviderOutput';
  activatedAt?: Maybe<Scalars['DateTime']['output']>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
}

export interface InsertResultIntoRoomInput {
  roomId: Scalars['UUID']['input'];
}

export interface InsertResultIntoRoomOutput {
  __typename?: 'InsertResultIntoRoomOutput';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  roomId: Scalars['UUID']['output'];
  roundTime: Scalars['Int']['output'];
}

export interface InsertRoomInput {
  minPrice: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  videoIdLarge?: InputMaybe<Scalars['String']['input']>;
  videoIdSmall?: InputMaybe<Scalars['String']['input']>;
}

export interface InsertRoomOutput {
  __typename?: 'InsertRoomOutput';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  minPrice: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  videoIdLarge?: Maybe<Scalars['String']['output']>;
  videoIdSmall?: Maybe<Scalars['String']['output']>;
}

export interface InsertTransactionInput {
  money: Scalars['Int']['input'];
  passwordOTP?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
}

export interface InsertTransactionOutput {
  __typename?: 'InsertTransactionOutput';
  id: Scalars['UUID']['output'];
  money: Scalars['Int']['output'];
  status: Scalars['String']['output'];
}

export interface InsertUserBetInput {
  bet: Scalars['JSONObject']['input'];
  roomId: Scalars['UUID']['input'];
  roundId: Scalars['UUID']['input'];
}

export interface InsertUserBetOutput {
  __typename?: 'InsertUserBetOutput';
  bet: UserBet;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['UUID']['output'];
  roomId: Scalars['UUID']['output'];
  userId: Scalars['UUID']['output'];
}

export interface ItemResultBet {
  __typename?: 'ItemResultBet';
  cards?: Maybe<Array<Scalars['String']['output']>>;
  point: Scalars['Int']['output'];
  quality: Scalars['String']['output'];
}

export interface Mutation {
  __typename?: 'Mutation';
  approveTransaction: ApproveTransactionOutput;
  deletedUserBetsByRoundId: DeletedUserBetsByRoundIdOutput;
  insertProvider: InsertProviderOutput;
  insertResultInRoom: InsertResultIntoRoomOutput;
  insertRoom: InsertRoomOutput;
  insertTransaction: InsertTransactionOutput;
  insertUserBet: InsertUserBetOutput;
  signIn: SignInOutput;
  signUp: SignUpOutput;
  updateProvider: UpdateProviderOutput;
  updateResultId: UpdateResultIdOutput;
}

export interface MutationApproveTransactionArgs {
  transactionId: Scalars['UUID']['input'];
}

export interface MutationDeletedUserBetsByRoundIdArgs {
  input: DeletedUserBetsByRoundIdInput;
}

export interface MutationInsertProviderArgs {
  input: InsertProviderInput;
}

export interface MutationInsertResultInRoomArgs {
  input: InsertResultIntoRoomInput;
}

export interface MutationInsertRoomArgs {
  input: InsertRoomInput;
}

export interface MutationInsertTransactionArgs {
  input: InsertTransactionInput;
}

export interface MutationInsertUserBetArgs {
  input: InsertUserBetInput;
}

export interface MutationSignInArgs {
  input: SignInInput;
}

export interface MutationSignUpArgs {
  input: SignUpInput;
}

export interface MutationUpdateProviderArgs {
  input: UpdateProviderInput;
  providerId: Scalars['UUID']['input'];
}

export interface MutationUpdateResultIdArgs {
  input: Scalars['JSONObject']['input'];
  resultId: Scalars['UUID']['input'];
}

export interface Player {
  __typename?: 'Player';
  userId: Scalars['UUID']['output'];
}

export interface PlayerBet {
  __typename?: 'PlayerBet';
  doubleBet: Scalars['Int']['output'];
  eventBet: Scalars['Int']['output'];
  superBet: Scalars['Int']['output'];
}

export interface Query {
  __typename?: 'Query';
  banks: Array<BankItem>;
  getResultsInRoom: GetResultsInRoomOutput;
  roomDetail: Room;
  roomList: RoomListOutput;
  userBetListByRoomId: UserBetListByRoomIdOutput;
  userInfo: UserInfoOutput;
  userList: UserListOutput;
  usersBetAggregateByRoundId: UsersBetAggregateByRoundIdOutput;
}

export interface QueryGetResultsInRoomArgs {
  roomId: Scalars['UUID']['input'];
}

export interface QueryRoomDetailArgs {
  roomId: Scalars['UUID']['input'];
}

export interface QueryRoomListArgs {
  input: RoomListInput;
}

export interface QueryUserBetListByRoomIdArgs {
  input: UserBetListByRoomIdInput;
}

export interface QueryUserListArgs {
  where?: InputMaybe<UserListInput>;
}

export interface QueryUsersBetAggregateByRoundIdArgs {
  roundId: Scalars['UUID']['input'];
}

export interface ResultBet {
  __typename?: 'ResultBet';
  dealer: ItemResultBet;
  player1: ItemResultBet;
  player2: ItemResultBet;
  player3: ItemResultBet;
}

export interface ResultItem {
  __typename?: 'ResultItem';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  result: Scalars['JSONObject']['output'];
  roomId: Scalars['UUID']['output'];
  roundTime: Scalars['Int']['output'];
}

export interface ReturningUserBet {
  __typename?: 'ReturningUserBet';
  bet: Scalars['JSONObject']['output'];
  id: Scalars['UUID']['output'];
}

export interface Room {
  __typename?: 'Room';
  dealer?: Maybe<Dealer>;
  dealerId?: Maybe<Scalars['UUID']['output']>;
  id: Scalars['String']['output'];
  minPrice: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  players?: Maybe<Array<Player>>;
  roundTime: Scalars['Int']['output'];
  videIdLarge?: Maybe<Scalars['String']['output']>;
  videIdSmall?: Maybe<Scalars['String']['output']>;
}

export interface RoomListInput {
  dealerId?: InputMaybe<Scalars['UUID']['input']>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
}

export interface RoomListOutput {
  __typename?: 'RoomListOutput';
  rooms: Array<Room>;
}

export interface SignInInput {
  namePlayer: Scalars['String']['input'];
  password: Scalars['String']['input'];
}

export interface SignInOutput {
  __typename?: 'SignInOutput';
  accessToken: Scalars['String']['output'];
  accessTokenExpiresIn: Scalars['Int']['output'];
  refreshToken: Scalars['String']['output'];
  refreshTokenId: Scalars['UUID']['output'];
  user: UserInfo;
}

export interface SignUpInput {
  bankAccountName: Scalars['String']['input'];
  bankAccountNumber: Scalars['String']['input'];
  bankName: Scalars['String']['input'];
  countryCode: Scalars['String']['input'];
  fullname?: InputMaybe<Scalars['String']['input']>;
  namePlayer: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordWithdrawal: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  providerCode: Scalars['String']['input'];
}

export interface SignUpOutput {
  __typename?: 'SignUpOutput';
  createdAt: Scalars['DateTime']['output'];
  userId: Scalars['UUID']['output'];
}

export interface UpdateProviderInput {
  activatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  code: Scalars['String']['input'];
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
}

export interface UpdateProviderOutput {
  __typename?: 'UpdateProviderOutput';
  activatedAt?: Maybe<Scalars['DateTime']['output']>;
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
}

export interface UpdateResultIdOutput {
  __typename?: 'UpdateResultIdOutput';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  result: Scalars['JSONObject']['output'];
  roomId: Scalars['UUID']['output'];
  roundTime: Scalars['Int']['output'];
}

export interface User {
  __typename?: 'User';
  countryCode: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  disabledAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  namePlayer: Scalars['String']['output'];
  passwordWithdrawal: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  role: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId: Scalars['UUID']['output'];
  walletMoney: Scalars['Int']['output'];
}

export interface UserBet {
  __typename?: 'UserBet';
  player1: PlayerBet;
  player2: PlayerBet;
  player3: PlayerBet;
}

export interface UserBetItem {
  __typename?: 'UserBetItem';
  bet: Scalars['JSONObject']['output'];
  id: Scalars['UUID']['output'];
  roomId: Scalars['UUID']['output'];
  roundId: Scalars['UUID']['output'];
  userId: Scalars['UUID']['output'];
}

export interface UserBetListByRoomIdInput {
  roomId: Scalars['UUID']['input'];
}

export interface UserBetListByRoomIdOutput {
  __typename?: 'UserBetListByRoomIdOutput';
  usersBet: Array<UserBetItem>;
}

export interface UserInfo {
  __typename?: 'UserInfo';
  id: Scalars['UUID']['output'];
  namePlayer: Scalars['String']['output'];
  role?: Maybe<Scalars['String']['output']>;
  walletMoney: Scalars['Int']['output'];
}

export interface UserInfoOutput {
  __typename?: 'UserInfoOutput';
  user: User;
}

export interface UserListInput {
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface UserListOutput {
  __typename?: 'UserListOutput';
  users: Array<User>;
}

export interface UsersBetAggregateByRoundIdOutput {
  __typename?: 'usersBetAggregateByRoundIdOutput';
  player1: AggregateItem;
  player2: AggregateItem;
  player3: AggregateItem;
}

export type SignInMutationVariables = Exact<{
  input: SignInInput;
}>;

export type SignInMutation = {
  __typename?: 'Mutation';
  signIn: {
    __typename?: 'SignInOutput';
    accessToken: string;
    accessTokenExpiresIn: number;
    refreshToken: string;
    refreshTokenId: any;
    user: {
      __typename?: 'UserInfo';
      id: any;
      role?: string | null;
      namePlayer: string;
      walletMoney: number;
    };
  };
};

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;

export type SignUpMutation = {
  __typename?: 'Mutation';
  signUp: { __typename?: 'SignUpOutput'; userId: any; createdAt: any };
};

export type BanksQueryVariables = Exact<{ [key: string]: never }>;

export type BanksQuery = {
  __typename?: 'Query';
  banks: Array<{ __typename?: 'BankItem'; id: any; name: string }>;
};

export type DeletedUserBetsByRoundIdMutationVariables = Exact<{
  input: DeletedUserBetsByRoundIdInput;
}>;

export type DeletedUserBetsByRoundIdMutation = {
  __typename?: 'Mutation';
  deletedUserBetsByRoundId: {
    __typename?: 'DeletedUserBetsByRoundIdOutput';
    isRefund?: boolean | null;
    refundMoney?: number | null;
  };
};

export type InsertResultInRoomMutationVariables = Exact<{
  input: InsertResultIntoRoomInput;
}>;

export type InsertResultInRoomMutation = {
  __typename?: 'Mutation';
  result: {
    __typename?: 'InsertResultIntoRoomOutput';
    createdAt: any;
    id: any;
    roomId: any;
    roundTime: number;
  };
};

export type UpdateResultIdMutationVariables = Exact<{
  resultId: Scalars['UUID']['input'];
  input: Scalars['JSONObject']['input'];
}>;

export type UpdateResultIdMutation = {
  __typename?: 'Mutation';
  updateResultId: {
    __typename?: 'UpdateResultIdOutput';
    id: any;
    result: any;
    roomId: any;
    createdAt: any;
  };
};

export type GetResultsInRoomQueryVariables = Exact<{
  roomId: Scalars['UUID']['input'];
}>;

export type GetResultsInRoomQuery = {
  __typename?: 'Query';
  getResultsInRoom: {
    __typename?: 'GetResultsInRoomOutput';
    results: Array<{
      __typename?: 'ResultItem';
      roundTime: number;
      roomId: any;
      result: any;
      id: any;
      createdAt: any;
    }>;
  };
};

export type RoomListQueryVariables = Exact<{
  input: RoomListInput;
}>;

export type RoomListQuery = {
  __typename?: 'Query';
  roomList: {
    __typename?: 'RoomListOutput';
    rooms: Array<{
      __typename?: 'Room';
      id: string;
      name: string;
      minPrice: number;
      dealerId?: any | null;
      roundTime: number;
      videIdLarge?: string | null;
      videIdSmall?: string | null;
      dealer?: {
        __typename?: 'Dealer';
        userId: any;
        namePlayer: string;
      } | null;
      players?: Array<{ __typename?: 'Player'; userId: any }> | null;
    }>;
  };
};

export type RoomDetailQueryVariables = Exact<{
  roomId: Scalars['UUID']['input'];
}>;

export type RoomDetailQuery = {
  __typename?: 'Query';
  roomDetail: {
    __typename?: 'Room';
    videIdSmall?: string | null;
    videIdLarge?: string | null;
    minPrice: number;
    id: string;
    dealerId?: any | null;
    roundTime: number;
    name: string;
    dealer?: { __typename?: 'Dealer'; userId: any; namePlayer: string } | null;
  };
};

export type InsertTransactionMutationVariables = Exact<{
  input: InsertTransactionInput;
}>;

export type InsertTransactionMutation = {
  __typename?: 'Mutation';
  transaction: {
    __typename?: 'InsertTransactionOutput';
    id: any;
    status: string;
    money: number;
  };
};

export type UserInfoQueryVariables = Exact<{ [key: string]: never }>;

export type UserInfoQuery = {
  __typename?: 'Query';
  userInfo: {
    __typename?: 'UserInfoOutput';
    user: {
      __typename?: 'User';
      userId: any;
      phone: string;
      createdAt?: any | null;
      namePlayer: string;
      countryCode: string;
      walletMoney: number;
    };
  };
};

export type InsertUserBetMutationVariables = Exact<{
  input: InsertUserBetInput;
}>;

export type InsertUserBetMutation = {
  __typename?: 'Mutation';
  insertUserBet: {
    __typename?: 'InsertUserBetOutput';
    userId: any;
    roomId: any;
    id: any;
    createdAt?: any | null;
  };
};

export type UsersBetAggregateByRoundIdQueryVariables = Exact<{
  roundId: Scalars['UUID']['input'];
}>;

export type UsersBetAggregateByRoundIdQuery = {
  __typename?: 'Query';
  usersBetAggregateByRoundId: {
    __typename?: 'usersBetAggregateByRoundIdOutput';
    player3: {
      __typename?: 'AggregateItem';
      count: number;
      totalMoney: number;
    };
    player2: {
      __typename?: 'AggregateItem';
      count: number;
      totalMoney: number;
    };
    player1: {
      __typename?: 'AggregateItem';
      count: number;
      totalMoney: number;
    };
  };
};

export const SignInDocument = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      accessToken
      accessTokenExpiresIn
      refreshToken
      refreshTokenId
      user {
        id
        role
        namePlayer
        walletMoney
      }
    }
  }
`;
export type SignInMutationFn = Apollo.MutationFunction<
  SignInMutation,
  SignInMutationVariables
>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInMutation,
    SignInMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(
    SignInDocument,
    options
  );
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<
  SignInMutation,
  SignInMutationVariables
>;
export const SignUpDocument = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      userId
      createdAt
    }
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    options
  );
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
export const BanksDocument = gql`
  query Banks {
    banks {
      id
      name
    }
  }
`;

/**
 * __useBanksQuery__
 *
 * To run a query within a React component, call `useBanksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBanksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBanksQuery({
 *   variables: {
 *   },
 * });
 */
export function useBanksQuery(
  baseOptions?: Apollo.QueryHookOptions<BanksQuery, BanksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BanksQuery, BanksQueryVariables>(
    BanksDocument,
    options
  );
}
export function useBanksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BanksQuery, BanksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BanksQuery, BanksQueryVariables>(
    BanksDocument,
    options
  );
}
export function useBanksSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<BanksQuery, BanksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<BanksQuery, BanksQueryVariables>(
    BanksDocument,
    options
  );
}
export type BanksQueryHookResult = ReturnType<typeof useBanksQuery>;
export type BanksLazyQueryHookResult = ReturnType<typeof useBanksLazyQuery>;
export type BanksSuspenseQueryHookResult = ReturnType<
  typeof useBanksSuspenseQuery
>;
export type BanksQueryResult = Apollo.QueryResult<
  BanksQuery,
  BanksQueryVariables
>;
export const DeletedUserBetsByRoundIdDocument = gql`
  mutation DeletedUserBetsByRoundId($input: DeletedUserBetsByRoundIdInput!) {
    deletedUserBetsByRoundId(input: $input) {
      isRefund
      refundMoney
    }
  }
`;
export type DeletedUserBetsByRoundIdMutationFn = Apollo.MutationFunction<
  DeletedUserBetsByRoundIdMutation,
  DeletedUserBetsByRoundIdMutationVariables
>;

/**
 * __useDeletedUserBetsByRoundIdMutation__
 *
 * To run a mutation, you first call `useDeletedUserBetsByRoundIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletedUserBetsByRoundIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletedUserBetsByRoundIdMutation, { data, loading, error }] = useDeletedUserBetsByRoundIdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletedUserBetsByRoundIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletedUserBetsByRoundIdMutation,
    DeletedUserBetsByRoundIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeletedUserBetsByRoundIdMutation,
    DeletedUserBetsByRoundIdMutationVariables
  >(DeletedUserBetsByRoundIdDocument, options);
}
export type DeletedUserBetsByRoundIdMutationHookResult = ReturnType<
  typeof useDeletedUserBetsByRoundIdMutation
>;
export type DeletedUserBetsByRoundIdMutationResult =
  Apollo.MutationResult<DeletedUserBetsByRoundIdMutation>;
export type DeletedUserBetsByRoundIdMutationOptions =
  Apollo.BaseMutationOptions<
    DeletedUserBetsByRoundIdMutation,
    DeletedUserBetsByRoundIdMutationVariables
  >;
export const InsertResultInRoomDocument = gql`
  mutation InsertResultInRoom($input: InsertResultIntoRoomInput!) {
    result: insertResultInRoom(input: $input) {
      createdAt
      id
      roomId
      roundTime
    }
  }
`;
export type InsertResultInRoomMutationFn = Apollo.MutationFunction<
  InsertResultInRoomMutation,
  InsertResultInRoomMutationVariables
>;

/**
 * __useInsertResultInRoomMutation__
 *
 * To run a mutation, you first call `useInsertResultInRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertResultInRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertResultInRoomMutation, { data, loading, error }] = useInsertResultInRoomMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInsertResultInRoomMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertResultInRoomMutation,
    InsertResultInRoomMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertResultInRoomMutation,
    InsertResultInRoomMutationVariables
  >(InsertResultInRoomDocument, options);
}
export type InsertResultInRoomMutationHookResult = ReturnType<
  typeof useInsertResultInRoomMutation
>;
export type InsertResultInRoomMutationResult =
  Apollo.MutationResult<InsertResultInRoomMutation>;
export type InsertResultInRoomMutationOptions = Apollo.BaseMutationOptions<
  InsertResultInRoomMutation,
  InsertResultInRoomMutationVariables
>;
export const UpdateResultIdDocument = gql`
  mutation UpdateResultId($resultId: UUID!, $input: JSONObject!) {
    updateResultId(resultId: $resultId, input: $input) {
      id
      result
      roomId
      createdAt
    }
  }
`;
export type UpdateResultIdMutationFn = Apollo.MutationFunction<
  UpdateResultIdMutation,
  UpdateResultIdMutationVariables
>;

/**
 * __useUpdateResultIdMutation__
 *
 * To run a mutation, you first call `useUpdateResultIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateResultIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateResultIdMutation, { data, loading, error }] = useUpdateResultIdMutation({
 *   variables: {
 *      resultId: // value for 'resultId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateResultIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateResultIdMutation,
    UpdateResultIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateResultIdMutation,
    UpdateResultIdMutationVariables
  >(UpdateResultIdDocument, options);
}
export type UpdateResultIdMutationHookResult = ReturnType<
  typeof useUpdateResultIdMutation
>;
export type UpdateResultIdMutationResult =
  Apollo.MutationResult<UpdateResultIdMutation>;
export type UpdateResultIdMutationOptions = Apollo.BaseMutationOptions<
  UpdateResultIdMutation,
  UpdateResultIdMutationVariables
>;
export const GetResultsInRoomDocument = gql`
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

/**
 * __useGetResultsInRoomQuery__
 *
 * To run a query within a React component, call `useGetResultsInRoomQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResultsInRoomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResultsInRoomQuery({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useGetResultsInRoomQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetResultsInRoomQuery,
    GetResultsInRoomQueryVariables
  > &
    (
      | { variables: GetResultsInRoomQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetResultsInRoomQuery, GetResultsInRoomQueryVariables>(
    GetResultsInRoomDocument,
    options
  );
}
export function useGetResultsInRoomLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetResultsInRoomQuery,
    GetResultsInRoomQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetResultsInRoomQuery,
    GetResultsInRoomQueryVariables
  >(GetResultsInRoomDocument, options);
}
export function useGetResultsInRoomSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetResultsInRoomQuery,
    GetResultsInRoomQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetResultsInRoomQuery,
    GetResultsInRoomQueryVariables
  >(GetResultsInRoomDocument, options);
}
export type GetResultsInRoomQueryHookResult = ReturnType<
  typeof useGetResultsInRoomQuery
>;
export type GetResultsInRoomLazyQueryHookResult = ReturnType<
  typeof useGetResultsInRoomLazyQuery
>;
export type GetResultsInRoomSuspenseQueryHookResult = ReturnType<
  typeof useGetResultsInRoomSuspenseQuery
>;
export type GetResultsInRoomQueryResult = Apollo.QueryResult<
  GetResultsInRoomQuery,
  GetResultsInRoomQueryVariables
>;
export const RoomListDocument = gql`
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

/**
 * __useRoomListQuery__
 *
 * To run a query within a React component, call `useRoomListQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoomListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoomListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRoomListQuery(
  baseOptions: Apollo.QueryHookOptions<RoomListQuery, RoomListQueryVariables> &
    ({ variables: RoomListQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RoomListQuery, RoomListQueryVariables>(
    RoomListDocument,
    options
  );
}
export function useRoomListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RoomListQuery,
    RoomListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RoomListQuery, RoomListQueryVariables>(
    RoomListDocument,
    options
  );
}
export function useRoomListSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    RoomListQuery,
    RoomListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<RoomListQuery, RoomListQueryVariables>(
    RoomListDocument,
    options
  );
}
export type RoomListQueryHookResult = ReturnType<typeof useRoomListQuery>;
export type RoomListLazyQueryHookResult = ReturnType<
  typeof useRoomListLazyQuery
>;
export type RoomListSuspenseQueryHookResult = ReturnType<
  typeof useRoomListSuspenseQuery
>;
export type RoomListQueryResult = Apollo.QueryResult<
  RoomListQuery,
  RoomListQueryVariables
>;
export const RoomDetailDocument = gql`
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

/**
 * __useRoomDetailQuery__
 *
 * To run a query within a React component, call `useRoomDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoomDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoomDetailQuery({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useRoomDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    RoomDetailQuery,
    RoomDetailQueryVariables
  > &
    (
      | { variables: RoomDetailQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RoomDetailQuery, RoomDetailQueryVariables>(
    RoomDetailDocument,
    options
  );
}
export function useRoomDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RoomDetailQuery,
    RoomDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RoomDetailQuery, RoomDetailQueryVariables>(
    RoomDetailDocument,
    options
  );
}
export function useRoomDetailSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    RoomDetailQuery,
    RoomDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<RoomDetailQuery, RoomDetailQueryVariables>(
    RoomDetailDocument,
    options
  );
}
export type RoomDetailQueryHookResult = ReturnType<typeof useRoomDetailQuery>;
export type RoomDetailLazyQueryHookResult = ReturnType<
  typeof useRoomDetailLazyQuery
>;
export type RoomDetailSuspenseQueryHookResult = ReturnType<
  typeof useRoomDetailSuspenseQuery
>;
export type RoomDetailQueryResult = Apollo.QueryResult<
  RoomDetailQuery,
  RoomDetailQueryVariables
>;
export const InsertTransactionDocument = gql`
  mutation InsertTransaction($input: InsertTransactionInput!) {
    transaction: insertTransaction(input: $input) {
      id
      status
      money
    }
  }
`;
export type InsertTransactionMutationFn = Apollo.MutationFunction<
  InsertTransactionMutation,
  InsertTransactionMutationVariables
>;

/**
 * __useInsertTransactionMutation__
 *
 * To run a mutation, you first call `useInsertTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTransactionMutation, { data, loading, error }] = useInsertTransactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInsertTransactionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertTransactionMutation,
    InsertTransactionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertTransactionMutation,
    InsertTransactionMutationVariables
  >(InsertTransactionDocument, options);
}
export type InsertTransactionMutationHookResult = ReturnType<
  typeof useInsertTransactionMutation
>;
export type InsertTransactionMutationResult =
  Apollo.MutationResult<InsertTransactionMutation>;
export type InsertTransactionMutationOptions = Apollo.BaseMutationOptions<
  InsertTransactionMutation,
  InsertTransactionMutationVariables
>;
export const UserInfoDocument = gql`
  query UserInfo {
    userInfo {
      user {
        userId
        phone
        createdAt
        namePlayer
        countryCode
        walletMoney
      }
    }
  }
`;

/**
 * __useUserInfoQuery__
 *
 * To run a query within a React component, call `useUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserInfoQuery(
  baseOptions?: Apollo.QueryHookOptions<UserInfoQuery, UserInfoQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserInfoQuery, UserInfoQueryVariables>(
    UserInfoDocument,
    options
  );
}
export function useUserInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserInfoQuery,
    UserInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserInfoQuery, UserInfoQueryVariables>(
    UserInfoDocument,
    options
  );
}
export function useUserInfoSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    UserInfoQuery,
    UserInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<UserInfoQuery, UserInfoQueryVariables>(
    UserInfoDocument,
    options
  );
}
export type UserInfoQueryHookResult = ReturnType<typeof useUserInfoQuery>;
export type UserInfoLazyQueryHookResult = ReturnType<
  typeof useUserInfoLazyQuery
>;
export type UserInfoSuspenseQueryHookResult = ReturnType<
  typeof useUserInfoSuspenseQuery
>;
export type UserInfoQueryResult = Apollo.QueryResult<
  UserInfoQuery,
  UserInfoQueryVariables
>;
export const InsertUserBetDocument = gql`
  mutation InsertUserBet($input: InsertUserBetInput!) {
    insertUserBet(input: $input) {
      userId
      roomId
      id
      createdAt
    }
  }
`;
export type InsertUserBetMutationFn = Apollo.MutationFunction<
  InsertUserBetMutation,
  InsertUserBetMutationVariables
>;

/**
 * __useInsertUserBetMutation__
 *
 * To run a mutation, you first call `useInsertUserBetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserBetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserBetMutation, { data, loading, error }] = useInsertUserBetMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useInsertUserBetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertUserBetMutation,
    InsertUserBetMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    InsertUserBetMutation,
    InsertUserBetMutationVariables
  >(InsertUserBetDocument, options);
}
export type InsertUserBetMutationHookResult = ReturnType<
  typeof useInsertUserBetMutation
>;
export type InsertUserBetMutationResult =
  Apollo.MutationResult<InsertUserBetMutation>;
export type InsertUserBetMutationOptions = Apollo.BaseMutationOptions<
  InsertUserBetMutation,
  InsertUserBetMutationVariables
>;
export const UsersBetAggregateByRoundIdDocument = gql`
  query UsersBetAggregateByRoundId($roundId: UUID!) {
    usersBetAggregateByRoundId(roundId: $roundId) {
      player3 {
        count
        totalMoney
      }
      player2 {
        count
        totalMoney
      }
      player1 {
        count
        totalMoney
      }
    }
  }
`;

/**
 * __useUsersBetAggregateByRoundIdQuery__
 *
 * To run a query within a React component, call `useUsersBetAggregateByRoundIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersBetAggregateByRoundIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersBetAggregateByRoundIdQuery({
 *   variables: {
 *      roundId: // value for 'roundId'
 *   },
 * });
 */
export function useUsersBetAggregateByRoundIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    UsersBetAggregateByRoundIdQuery,
    UsersBetAggregateByRoundIdQueryVariables
  > &
    (
      | { variables: UsersBetAggregateByRoundIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    UsersBetAggregateByRoundIdQuery,
    UsersBetAggregateByRoundIdQueryVariables
  >(UsersBetAggregateByRoundIdDocument, options);
}
export function useUsersBetAggregateByRoundIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UsersBetAggregateByRoundIdQuery,
    UsersBetAggregateByRoundIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    UsersBetAggregateByRoundIdQuery,
    UsersBetAggregateByRoundIdQueryVariables
  >(UsersBetAggregateByRoundIdDocument, options);
}
export function useUsersBetAggregateByRoundIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    UsersBetAggregateByRoundIdQuery,
    UsersBetAggregateByRoundIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    UsersBetAggregateByRoundIdQuery,
    UsersBetAggregateByRoundIdQueryVariables
  >(UsersBetAggregateByRoundIdDocument, options);
}
export type UsersBetAggregateByRoundIdQueryHookResult = ReturnType<
  typeof useUsersBetAggregateByRoundIdQuery
>;
export type UsersBetAggregateByRoundIdLazyQueryHookResult = ReturnType<
  typeof useUsersBetAggregateByRoundIdLazyQuery
>;
export type UsersBetAggregateByRoundIdSuspenseQueryHookResult = ReturnType<
  typeof useUsersBetAggregateByRoundIdSuspenseQuery
>;
export type UsersBetAggregateByRoundIdQueryResult = Apollo.QueryResult<
  UsersBetAggregateByRoundIdQuery,
  UsersBetAggregateByRoundIdQueryVariables
>;
