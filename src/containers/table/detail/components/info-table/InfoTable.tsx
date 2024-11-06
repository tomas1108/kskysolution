import { useTranslation } from 'react-i18next';
import { Typography } from '~/components';
import { useUser } from '~/hooks/context/userContext';
import { cn } from '~/lib/utils';
import { textGradientVariants } from '~/styles/variants';
import { Room } from '~/types/generated';
import { formatCurrency } from '~/utils/common';

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

const InfoTable: React.FC<InfoTableProps> = ({ room }) => {
  const { t } = useTranslation();
  const { user } = useUser();
  return (
    <div className="flex min-w-[200px] flex-col gap-3 rounded-xl bg-slate-50/35 p-4 shadow-md">
      <ItemTable title={t('bet.room')} value={room?.name} />
      <ItemTable title={t('bet.userBet')} value={user?.namePlayer} />
      <ItemTable
        className={cn(textGradientVariants)}
        title={t('bet.money')}
        value={formatCurrency(user?.walletMoney)}
      />
      <ItemTable
        title={t('bet.limit')}
        value={formatCurrency(room?.minPrice ?? 0)}
      />
    </div>
  );
};

export default InfoTable;
