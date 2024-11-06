import { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '~/lib/utils';

type ContentProps = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

const Content: React.FC<ContentProps> = ({ children, className, ...rest }) => {
  return (
    <div className={cn('m-auto my-4 max-w-screen-2xl', className)} {...rest}>
      {children}
    </div>
  );
};

export default Content;
