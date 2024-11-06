import { useTranslation } from 'react-i18next';
import { Typography } from '~/components';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { Room } from '~/types/generated';

const { Text } = Typography;

type InfoTableProps = {
  room: Room;
};

type ItemTableProps = {
  title: string;
  value: string;
  className?: string;
};

const ItemTable: React.FC<ItemTableProps> = ({ title, value, className }) => {
  return (
    <div className="flex flex-row gap-2">
      <Text className="text-white">{title}:</Text>
      <Text className={cn('font-semibold text-white', className)}>
        {value ?? '-'}
      </Text>
    </div>
  );
};

const DealerInfoTable: React.FC<InfoTableProps> = ({ room }) => {
  const { t } = useTranslation();
  return (
    <div className="z-auto flex flex-col gap-3 rounded-xl bg-slate-50/35 p-4 shadow-md">
      <ItemTable
        className="italic"
        title={t('bet.dealer')}
        value={room?.dealer?.namePlayer ?? '-'}
      />
    </div>
  );
};

export default DealerInfoTable;
