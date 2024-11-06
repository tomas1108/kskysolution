import { cva } from 'class-variance-authority';
import { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '~/lib/utils';

type TextProps = PropsWithChildren & HTMLAttributes<HTMLSpanElement>;
type ParagraphProps = PropsWithChildren & HTMLAttributes<HTMLParagraphElement>;
type TitleProps = PropsWithChildren &
  HTMLAttributes<HTMLHeadingElement> & {
    variant?: 'h1' | 'h2' | 'h3' | 'h4';
  };

const textVariants = cva('font-semibold');
const paragraphVariants = cva('leading-7 [&:not(:first-child)]:mt-6');
const titleVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight'
    }
  }
});
const Text: React.FC<TextProps> = ({ children, className, ...props }) => {
  return (
    <span {...props} className={cn(textVariants, className)}>
      {children}
    </span>
  );
};

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p {...props} className={cn(paragraphVariants, className)}>
      {children}
    </p>
  );
};

const Title: React.FC<TitleProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  switch (variant) {
    case 'h1':
      return (
        <h1 {...props} className={cn(titleVariants({ variant }), className)}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 {...props} className={cn(titleVariants({ variant }), className)}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 {...props} className={cn(titleVariants({ variant }), className)}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 {...props} className={cn(titleVariants({ variant }), className)}>
          {children}
        </h4>
      );
    default:
      return (
        <h1 {...props} className={cn(titleVariants({ variant }), className)}>
          {children}
        </h1>
      );
  }
};

const Typography = {} as {
  Text: React.FC<TextProps>;
  Paragraph: React.FC<ParagraphProps>;
  Title: React.FC<TitleProps>;
};

Typography.Text = Text;
Typography.Paragraph = Paragraph;
Typography.Title = Title;

export default Typography;
