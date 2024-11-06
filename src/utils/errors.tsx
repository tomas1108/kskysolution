import { isApolloError } from '@apollo/client';
import { toast } from 'sonner';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throwError = (error: any) => {
  if (isApolloError(error)) {
    toast.warning('Có lỗi xảy ra', {
      description: error.message
    });
  }
};

export const clientSuccessMessage = ({
  successMessage = null,
  description = null,
  align = 'left'
}: {
  align?: 'left' | 'center' | 'right';
  description?: string | null;
  successMessage?: string | null;
}) => {
  if (!successMessage) {
    successMessage = 'Thêm thành công';
  }

  return toast.success(successMessage, {
    description: description && description
  });
};
