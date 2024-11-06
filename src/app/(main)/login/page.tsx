import { NextPage } from 'next';
import LoginView from '~/containers/login';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <LoginView />;
};

export default Page;
