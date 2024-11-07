import { NextPage } from 'next';
import TableDetailView from 'containers/table/detail';
import { PlayerBetProvider } from '~/containers/table/detail/context';
import SportAndCasino from '~/components/sport-casino';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <SportAndCasino />
   
  );
};

export default Page;
