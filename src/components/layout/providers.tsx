'use client';

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from '~/lib/apollo/http-clients';
import { ThemeProvider } from '~/components/ui/theme-provider';
import { UserProvider } from '~/hooks/context/userContext';
import { I18nextProvider } from 'react-i18next';
import i18n from '~/lib/i18n';
import appStore from '~/store/zustand/appStore';

export default function Providers({ children }: { children: React.ReactNode }) {
  const { i18nextLng } = appStore();

  i18n.language = i18nextLng || 'vi';

  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <I18nextProvider i18n={i18n}>
            <UserProvider>{children}</UserProvider>
          </I18nextProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
