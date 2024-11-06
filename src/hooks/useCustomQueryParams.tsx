import { useCallback, useMemo } from 'react';
import { useQueryParams } from 'use-query-params';
import NProgress from 'nprogress';

function useCustomQueryParams(props: Record<string, any>) {
  const [data, set] = useQueryParams(props);

  const params = useMemo(() => data as any, [data]);

  const setQuery = useCallback(
    (object?: any, action?: 'push' | 'pushIn' | 'replaceIn' | 'replace') => {
      set(object, action ?? 'pushIn');
      NProgress.done();
    },
    [set]
  );

  return [params, setQuery];
}

export default useCustomQueryParams;
