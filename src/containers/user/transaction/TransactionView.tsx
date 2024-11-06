'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '~/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useCallback, useRef, useState } from 'react';
import { SelectBase } from '~/components';
import { TransactionType } from '~/constants/transaction';
import { Input } from '~/components/ui/input';
import { cn } from '~/lib/utils';
import { Button, buttonVariants } from '~/components/ui/button';
import { useTranslation } from 'react-i18next';
import ModalOTP from './components/ModalOTP';
import { useInsertTransaction } from '~/hooks/gql/transaction';
import { InsertTransactionInput } from '~/types/generated';
import { throwError } from '~/utils/errors';
import { toast } from 'sonner';
import { useUserDispatch } from '~/hooks/context/userContext';
import { Types } from '~/hooks/context/userReducers';

type TransactionViewProps = {};

const formSchema = z.object({
  money: z.coerce
    .number()
    .min(50000, { message: 'Số tiền nạp tối thiểu là 50000' }),
  type: z.string()
});

type TransactionFormValues = z.infer<typeof formSchema>;

const OPTIONS_TRANSACTION = [
  { value: 100000, label: '+100,000', id: 1 },
  { value: 500000, label: '+500,000', id: 2 },
  { value: 1000000, label: '+1,000,000', id: 3 },
  { value: 5000000, label: '+5,000,000', id: 4 },
  { value: 1000000, label: '+1,000,000', id: 5 },
  { value: 5000000, label: '+5,000,000', id: 6 }
];

const TransactionView: React.FC<TransactionViewProps> = () => {
  const { insertTransaction, loading } = useInsertTransaction();
  const { t } = useTranslation();
  const form = useForm<TransactionFormValues>({
    resolver: zodResolver(formSchema)
  });

  const [open, setOpen] = useState(false);
  const dispatchUser = useUserDispatch();

  const onSubmit = useCallback(async (payload) => {
    if (payload.type === TransactionType.WITHDRAW) {
      setOpen(true);
    } else {
      await insertTransaction({
        input: {
          money: payload.money,
          type: payload.type
        }
      });
      toast.success(t('transaction.depositSuccess'));
      form.reset();
    }
  }, []);

  const onOpenChange = useCallback(
    async (open: boolean, password: string) => {
      try {
        setOpen(open);
        if (password?.length === 6) {
          const input: InsertTransactionInput = {
            money: form.getValues('money'),
            type: form.getValues('type'),
            passwordOTP: password
          };
          await insertTransaction({
            input
          });
          toast.success(t('transaction.withdrawalSuccess'));
          dispatchUser({
            type: Types.SetMoneyActionWithdraw,
            payload: {
              money: input.money
            }
          });
          form.reset();
        }
      } catch (error) {
        throwError(error);
      }
    },
    [form]
  );

  return (
    <div className="w-full">
      <div className="m-auto max-w-xl rounded-lg bg-slate-50/25 px-6 py-4 shadow-xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-8"
          >
            <div className="grid gap-4 py-4">
              <div className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('transaction.method')}</FormLabel>
                      <FormControl>
                        <SelectBase
                          disabled={loading}
                          options={[
                            {
                              value: TransactionType.DEPOSIT,
                              label: t('transaction.deposit')
                            },
                            {
                              value: TransactionType.WITHDRAW,
                              label: t('transaction.withdrawal')
                            }
                          ]}
                          placeholder={t('transaction.methodPlaceholder')}
                          className="h-[52px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="money"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('transaction.currency')}</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder={t('transaction.moneyPlaceholder')}
                          className="h-[52px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {OPTIONS_TRANSACTION.map((option) => {
                  return (
                    <div
                      className={cn(
                        buttonVariants({ variant: 'outline' }),
                        'h-[32px] cursor-pointer',
                        loading &&
                          'cursor-not-allowed opacity-50 hover:bg-transparent'
                      )}
                      onClick={() =>
                        !loading && form.setValue('money', option.value)
                      }
                      key={option.id}
                    >
                      {option.label}
                    </div>
                  );
                })}
              </div>
              <div className="text-[10px]">
                <strong className="text-[12px]">{t('transaction.note')}</strong>
                <br />
                <ul className="list-disc">
                  <li>{t('transaction.description1')}</li>
                  <li>{t('transaction.description2')}</li>
                  <li>{t('transaction.description3')}</li>
                  <li>{t('transaction.description4')}</li>
                  <li>{t('transaction.description5')}</li>
                </ul>
              </div>
            </div>
            <Button
              id="submit"
              key="submit"
              type="submit"
              className="w-full"
              loading={loading}
            >
              {t('transaction.send')}
            </Button>
          </form>
        </Form>
      </div>
      <ModalOTP open={open} onOpenChange={onOpenChange} />
    </div>
  );
};

export default TransactionView;
