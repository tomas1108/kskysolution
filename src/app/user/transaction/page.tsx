import { NextPage } from 'next';
import TransactionView from '~/containers/user/transaction';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <TransactionView />;
};

export default Page;
