'use client';

import { MoveLeft } from 'lucide-react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useCustomRouter } from '~/hooks';
import { cn } from '~/lib/utils';
import { hoverOpacityVariants } from '~/styles/variants';

type HeaderBackProps = {
  onGoBack?: () => void;
};

const HeaderBack: React.FC<HeaderBackProps> = ({ onGoBack }) => {
  const { t } = useTranslation();
  const { back } = useCustomRouter();

  const goBack = useCallback(() => {
    if (onGoBack) {
      onGoBack();
      return;
    }
    back();
  }, []);

  return (
    <div
      onClick={goBack}
      className={cn(
        hoverOpacityVariants,
        'my-4 flex w-fit cursor-pointer flex-row gap-3'
      )}
    >
      <MoveLeft size={24} />
      <span>{t('app.back')}</span>
    </div>
  );
};

export default HeaderBack;
