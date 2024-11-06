'use client';

import { DialogProps } from '@radix-ui/react-dialog';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '~/components/ui/button';
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Dialog
} from '~/components/ui/dialog';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from '~/components/ui/input-otp';

type ModalOTPProps = Omit<DialogProps, 'onOpenChange'> & {
  onOpenChange: (open: boolean, password: string) => void;
};

const ModalOTP: React.FC<ModalOTPProps> = ({ onOpenChange, ...props }) => {
  const { t } = useTranslation();
  const [value, setValue] = useState<string>();

  const onChange = (e: string) => {
    setValue(e);
  };

  const onHandleChangeOpen = (open: boolean) => {
    onOpenChange(open, open ? value : '');
    setValue('');
  };

  const onHandleConfirmPassword = useCallback(() => {
    onOpenChange(false, value);
    setValue('');
  }, [value]);

  return (
    <Dialog onOpenChange={onHandleChangeOpen} {...props}>
      <DialogContent className="m-auto bg-slate-100/50 sm:max-w-[325px]">
        <DialogHeader>
          <DialogTitle>{t('transaction.passwordWithDrawal')}</DialogTitle>
        </DialogHeader>
        <div className="flex w-full justify-center">
          <InputOTP maxLength={6} onChange={onChange}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <DialogFooter>
          <Button id="submit" onClick={onHandleConfirmPassword}>
            {t('transaction.confirm')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalOTP;
