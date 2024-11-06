'use client';

import React from 'react';
import { z } from 'zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { SignUpInput } from '~/types/generated';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { Checkbox } from '~/components/ui/checkbox';
import { useSignUp } from '~/hooks/gql/auth';
import { useRouter } from 'next/navigation';
import { throwError } from '~/utils/errors';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { SelectBase } from '~/components';
import { useGetBanks } from '~/hooks/gql/bank';

const REGEX_PASSWORD =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const inputVariant =
  'w-full px-3 py-2 border rounded-lg bg-gray-700 border-gray-600 focus:outline-none focus:ring-2 focus:ring-gold-500';

const formSchema = z.object({
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(30, { message: 'Password must be at most 30 characters' })
    .regex(
      REGEX_PASSWORD,
      'Password must contain at least one number, one letter, and one special character'
    ),
  namePlayer: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters' }),
  phone: z
    .string()
    .min(10, { message: 'Phone must be at least 10 characters' }),
  bankName: z.string(),
  bankAccountName: z.string().toUpperCase(),
  bankAccountNumber: z.string(),
  passwordWithdrawal: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(6, { message: 'Password must be at most 6 characters' })
    .regex(/([0-9]{4})\b/, 'Password withdrawal is not valid'),
  providerCode: z.string()
});

const RegisterView: React.FC = () => {
  const { banks, loading: loadingBanks } = useGetBanks();
  const { t } = useTranslation();
  const router = useRouter();
  const { signUp, loading } = useSignUp();
  const form = useForm<any>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countryCode: '+84'
    }
  });

  const onSubmit = async (payload: SignUpInput) => {
    try {
      await signUp({
        input: { ...payload, countryCode: '+84' }
      });

      await fetch('/api/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userCode: payload.namePlayer })
      });

      toast.success(t('register.registerSuccess'));

      router.replace('/login');
    } catch (error) {
      throwError(error);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 py-4">
      <div className="w-full max-w-md rounded-lg bg-dark-800 p-8 shadow-lg">
        <h2 className="gradient-background mb-6 text-center text-2xl font-bold text-gold-500">
          {t('register.registerAccount')}
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-4"
          >
            <FormField
              control={form.control}
              name="namePlayer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('register.idAccount')}</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(inputVariant, 'h-[42px]')}
                      placeholder={t('register.idAccount')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('register.password')}</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(inputVariant, 'h-[42px]')}
                      type="password"
                      placeholder={t('register.password')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('register.phone')}</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(inputVariant, 'h-[42px]')}
                      placeholder={t('register.phone')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bankName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('register.bankName')}</FormLabel>
                  <FormControl>
                    <SelectBase
                      loading={loadingBanks}
                      options={banks}
                      labelKey="name"
                      valueKey="name"
                      placeholder={t('register.bankName')}
                      className={cn(inputVariant, 'h-[42px]')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bankAccountName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('register.bankAccountName')}</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(inputVariant, 'h-[42px]')}
                      placeholder={t('register.bankAccountName')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bankAccountNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('register.bankAccountNumber')}</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(inputVariant, 'h-[42px]')}
                      placeholder={t('register.bankAccountNumber')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordWithdrawal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('register.passwordWithDrawal')}</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(inputVariant, 'h-[42px]')}
                      type="password"
                      placeholder={t('register.passwordWithDrawal')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="providerCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('register.providerCode')}</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(inputVariant, 'h-[42px]')}
                      placeholder={t('register.providerCode')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="check"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check" {...field} />
                    <label
                      htmlFor="terms"
                      className="line-clamp-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t('register.labelTerm')}
                    </label>
                  </div>
                </FormItem>
              )}
            />

            <Button
              className="w-full rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
              type="submit"
              loading={loading}
            >
              {t('register.register')}
            </Button>
          </form>
        </Form>
        <p className="mt-2 text-center text-gray-200">
          {t('register.accountExist')}{' '}
          <Link href="/login" className="text-yellow hover:underline">
            {t('register.login')}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterView;
