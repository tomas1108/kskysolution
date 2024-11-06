import { Content } from '~/components/layout';
import { Header } from '~/containers/header';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}
