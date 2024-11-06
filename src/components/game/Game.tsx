'use client';

import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { _GLOBAL } from '~/constants/global.const';
import { toast } from 'sonner';
import { useUser } from '~/hooks/context/userContext';
import { t } from 'i18next';
import fetchAPI from '~/utils/helpers/fetching.helper';
import { HeaderBack } from '../layout';
import { ArrowBigLeft } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

type TProps = {
  data: any;
};

const Games = ({ data }: TProps) => {
  const [selectedVendorCode, setSelectedVendorCode] = useState<string | null>(
    null
  );
  const { message } = data;
  const { user } = useUser();
  
  const fetchAdminBalance = async () => {
    try {
      const res = await fetch('/api/agent-balance', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
       
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await res.json();
      return result;
      
     
    } catch (error) {
     
      throw new Error('Error fetching admin balance');
    }
  };


  const handlePlayGame = async (vendorCode: string, gameCode: string) => {
    try {
      const userCode = user.namePlayer;
      const data = await fetchAdminBalance();
      const balanceAdmin = data.message;
      const balanceUser = user.walletMoney
  
      if (balanceUser < balanceAdmin) {
        toast.error('Số dư không đủ vui lòng liên hệ admin');
        return;
      }
      const formData = {
        vendorCode,
        gameCode,
        userCode: userCode,
        language: _GLOBAL.LANGUAGES,
        currency: _GLOBAL.CURRENCY
      };

      const res = await fetch('/api/game-launch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await res.json();
      if (result.success && result.message) {
        window.location.href = result.message;
      } else {
       
      }
    } catch (error) {
   
      toast.error(t('bet.action.playSlotError'));
    }
  };

  const filteredGames = selectedVendorCode
    ? message.filter((item: any) => item['vendorCode'] === selectedVendorCode)
    : message;

  function onGoBack(): void {
 
  }

  return (
    <>
<TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <ArrowBigLeft 
          className="cursor-pointer text-white w-100 mb-50 sm:w-16 ml-[130px]" 
          onClick={onGoBack} // Nếu cần xử lý sự kiện click
        />
      </TooltipTrigger>
      <TooltipContent side="right" align="center">
        {t('app.back')} {/* Nội dung tooltip */}
      </TooltipContent>
    </Tooltip>

    <div
      className={clsx(
        'mx-auto mt-0 grid grid-cols-1 gap-y-8 py-10 md:w-[80%] md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5'
      )}
    >
      {filteredGames.length === 0 && <p>No games found.</p>}
      {filteredGames.map((item: any, index: number) => (
        <div
          key={index}
          className="group relative transform cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <div className="mx-auto mt-0 max-w-[500px]">
            <Image
              src={item.thumbnail}
              alt={item.gameName}
              width={500}
              height={364}
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="text-center">
              <h3 className="text-2xl font-black text-yellow md:text-xl lg:text-xl">
                {item.gameName}
              </h3>
              <button
                className="bgBtn mt-4 rounded-[16px] px-3 py-1 text-base font-semibold text-black lg:text-sm"
                onClick={() => handlePlayGame(item.vendorCode, item.gameCode)}
              >
                {t('bet.action.game')}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </TooltipProvider>
    </>
  );
};

Games.displayName = 'Games';
export default Games;
