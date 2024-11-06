import { useQuery } from '@apollo/client';
import { QUERY_BANKS } from '~/gql/bank';
import { BanksQuery, BanksQueryVariables } from '~/types/generated';

const useGetBanks = () => {
  const { data, loading, ...rest } = useQuery<BanksQuery, BanksQueryVariables>(
    QUERY_BANKS,
    {}
  );

  return {
    banks: data?.banks ?? [],
    loading,
    ...rest
  };
};

export default useGetBanks;
