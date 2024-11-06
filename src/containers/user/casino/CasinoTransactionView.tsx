'use client';

import { useState } from 'react';
import { Modal } from './components/Modal';
import { Input } from '~/components/ui/input';
import { toast } from 'sonner';
import { useUser, useUserDispatch } from '~/hooks/context/userContext';
import { Types } from '~/hooks/context/userReducers';
import { TransactionType } from '~/constants/transaction';
import { useInsertTransaction } from '~/hooks/gql/transaction';
import { throwError } from '~/utils/errors';
import { useTranslation } from 'react-i18next';

type CasinoTransactionViewProps = {};

const CasinoTransactionView: React.FC<CasinoTransactionViewProps> = () => {
  const { insertTransaction, loading } = useInsertTransaction();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [transactionType, setTransactionType] = useState<TransactionType | null>(null);
  const [amount, setAmount] = useState<string>(''); 
  const dispatchUser = useUserDispatch();
  const { user } = useUser();
  const userCode = user?.namePlayer;

  const casinoBalance = user?.walletMoney || 0;  // Assuming casinoBalance is part of the user object

  const formatNumber = (value: number) => {
    return value.toLocaleString(); 
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/,/g, ''); 
    if (!isNaN(Number(value))) {
      setAmount(formatNumber(Number(value))); 
    }
  };


  const handleInsertTransaction = async (type: TransactionType) => {
    try {
     
      await insertTransaction({
        input: {
          money: Number(amount.replace(/,/g, '')), 
          type,
        },
      });
   
      if (type === TransactionType.DEPOSIT) {
        await fetch('/api/deposit-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userCode,
            balance: Number(amount.replace(/,/g, '')), 
          }),
        });
      }
  
    
      if (type === TransactionType.WITHDRAW) {
        await fetch('/api/withdraw-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userCode,
            balance: Number(amount.replace(/,/g, '')), 
          }),
        });
      }

      toast.success(t(`transaction.${type === TransactionType.DEPOSIT ? 'depositSuccess' : 'withdrawalSuccess'}`));
      setAmount(''); 
      setOpen(false); 
    } catch (error) {
      throwError(error); 
    }
  };
  

  

  const onSubmit = () => {
    if (transactionType) {
      handleInsertTransaction(transactionType);
    }
  };

  const openModal = (type: TransactionType) => {
    setTransactionType(type);
    setOpen(true);
  };

  return (
    <div className="w-full">
  <div className="m-auto max-w-xl rounded-lg px-6 py-4">
        <div className="flex flex-col md:flex-row justify-around gap-4">
          <button
            onClick={() => openModal(TransactionType.DEPOSIT)}
            className="transition-button relative h-12 w-full rounded-lg text-black"
            disabled={loading}
          >
            {t('transaction.casinoDeposit')}
          </button>
          <button
            onClick={() => openModal(TransactionType.WITHDRAW)}
            className="transition-button relative h-12 w-full rounded-lg text-black"
            disabled={loading}
          >
            {t('transaction.casinoWithdrawl')}
          </button>


          
        </div>


        <div className="mt-4 text-center ">
          <p> {t('transaction.casinoBalance')}: {formatNumber(casinoBalance)} {t('app.prefix')}</p>
        </div>

        {open && (
          <Modal
            isOpen={open}
            onClose={() => setOpen(false)}
            title={transactionType === TransactionType.DEPOSIT ? `${t('transaction.deposit')}` : `${t('transaction.withdrawal')}`}
          >
            <div className="space-y-4">
              <Input
                value={amount}
                onChange={handleAmountChange}
                placeholder={t('transaction.moneyPlaceholder')}
                disabled={loading}
                type="text" 
                className="w-full text-black"
              />
              <button
                onClick={onSubmit}
                className="w-full h-12 rounded-lg text-white bg-black cursor-pointer "
                disabled={loading || Number(amount.replace(/,/g, '')) <= 0} 
              >
                {t('transaction.send')}
              </button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default CasinoTransactionView;
