import { useQuery } from '@apollo/client';
import { QUERY_USER_INFO } from '~/gql/user';
import { UserInfoOutput } from '~/types/generated';
import auth from '~/utils/auth';

const useUserInfo = () => {
  const { data, loading, refetch } = useQuery<{
    userInfo: UserInfoOutput;
  }>(QUERY_USER_INFO, {
    skip: !auth.getToken
  });
  return {
    user: data?.userInfo.user,
    loading,
    refetch
  };
};

export default useUserInfo;
