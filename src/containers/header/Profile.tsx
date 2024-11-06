'use client';

import { CircleDollarSign, LifeBuoy, LogOut, User } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '~/components/ui/dropdown-menu';
import { _FLAG_COUNTRY } from '~/constants/global.const';
import { useUser } from '~/hooks/context/userContext';
import useAuth from '~/hooks/useAuth';

import { formatCurrency } from '~/utils/common';

type ProfileProps = {};

const Profile: React.FC<ProfileProps> = () => {
  const { t, i18n } = useTranslation();
  const navigation = useRouter();
  const { user } = useUser();

  const { removeAuth } = useAuth();

  const onHandleLogout = useCallback(() => {
    removeAuth();
    navigation.push('/');
  }, [navigation, removeAuth]);

  const flagCountry = useMemo(() => {
    return _FLAG_COUNTRY.find((flag) => flag.lng === i18n?.language);
  }, [i18n?.language]);

  return (
    <div className="flex flex-row gap-3">
      <div className="text-whit flex h-[32px] cursor-pointer items-center gap-1 rounded-[32px] bg-second p-2 text-[10px]">
        <Image
          src={flagCountry?.src}
          width={26}
          height={26}
          alt={i18n.language}
        />
        {/* {_FLAG_COUNTRY} */}
        {formatCurrency(user?.walletMoney, t('app.prefix'))}
        <CircleDollarSign color="yellow" size={14} className="animate-bounce" />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-[32px] w-[32px] cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-20 w-56">
          <DropdownMenuLabel>
            {t('home.profile.myAccount')}
            <br />
            <span className="text-[10px]">{user?.namePlayer}</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span> {t('home.profile.profile')}</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span> {t('home.profile.support')}</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onHandleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>{t('home.profile.logout')}</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
