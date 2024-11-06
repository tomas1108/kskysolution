declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession`, `auth` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string;
    } & User;
  }

  interface User {
    foo?: string;
  }
}
