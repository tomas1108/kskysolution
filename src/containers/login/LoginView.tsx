'use client';

import { z } from 'zod';
import { SignInInput } from '~/types/generated';
import { useSignIn } from '~/hooks/gql/auth';
import { throwError } from '~/utils/errors';
import { useRouter } from 'next/navigation';
import useAuth from '~/hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { Checkbox } from '~/components/ui/checkbox';
import { useUserDispatch } from '~/hooks/context/userContext';
import { Types } from '~/hooks/context/userReducers';
import { useTranslation } from 'react-i18next';


const REGEX_PASSWORD =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const formSchema = z.object({
  namePlayer: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(30, { message: 'Password must be at most 30 characters' })
    .regex(
      REGEX_PASSWORD,
      'Password must contain at least one number, one letter, and one special character'
    )
});

const inputVariant =
  'w-full px-3 py-2 border rounded-lg bg-gray-700 border-gray-600 focus:outline-none focus:ring-2 focus:ring-gold-500';

const LoginView = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { signIn, loading } = useSignIn();
  const { ztSignIn } = useAuth();
  const dispatch = useUserDispatch();

  const form = useForm<SignInInput>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (payload: SignInInput) => {
    try {
      const { data } = await signIn({
        input: payload
      });
      ztSignIn(data?.signIn);
      dispatch({
        type: Types.SetInfo,
        payload: {
          ...(data?.signIn?.user as any)
        }
      });
      
      if (['dealer', 'admin'].includes(data?.signIn?.user?.role)) {
        router.replace('/dealer/room/niu-niu');
      } else {
        router.replace('/');
      }
    } catch (error) {
      throwError(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-md rounded-lg bg-dark-800 p-8 shadow-lg">
        <h2 className="gradient-background mb-6 text-center text-2xl font-bold text-gold-500">
          {t('login.accountLogin')}
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
                  <FormLabel>{t('login.idAccount')}</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(inputVariant, 'h-[42px]')}
                      placeholder={t('login.idAccount')}
                      disabled={loading}
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
                  <FormLabel>{t('login.password')}</FormLabel>
                  <FormControl>
                    <Input
                      className={cn(inputVariant, 'h-[42px]')}
                      type="password"
                      placeholder={t('login.password')}
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {t('login.rememberPassword')}
                </label>
              </div>
              <a href="#" className="text-sm text-gray-400 hover:text-gray-200">
                {t('login.forgotPassword')}
                {'?'}
              </a>
            </div>
            <div className="mb-6 text-xs text-gray-400">
              {t('login.labelTerm')}
            </div>
            <Button
              loading={loading}
              className="w-full rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
              type="submit"
            >
              {t('login.login')}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginView;
