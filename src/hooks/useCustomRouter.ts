import { usePathname, useRouter } from 'next/navigation';
import NProgress from 'nprogress';
import { useEffect } from 'react';

export default function useCustomRouter(): ReturnType<typeof useRouter> {
  const router = useRouter();
  const pathname = usePathname();

  const originalPush = router.push;

  router.push = (
    ...args: Parameters<typeof router.push>
  ): ReturnType<typeof originalPush> => {
    NProgress.start();
    return originalPush(...args);
  };

  useEffect(() => {
    NProgress.done();
  }, [pathname, router]);

  return router;
}
