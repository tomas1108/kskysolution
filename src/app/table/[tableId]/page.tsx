import { NextPage } from 'next';
import TableDetailView from 'containers/table/detail';
import { PlayerBetProvider } from '~/containers/table/detail/context';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <PlayerBetProvider>
      <TableDetailView />
    </PlayerBetProvider>
  );
};

export default Page;
