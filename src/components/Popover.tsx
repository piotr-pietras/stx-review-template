import { Popover as PopoverPrimitive } from 'radix-ui';
import { ReactNode } from 'react';
import cn from 'clsx';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  content: ReactNode;
  className?: string;
};

export const Popover = ({
  isOpen,
  setIsOpen,
  children,
  content,
  className,
}: Props) => {
  const onClickOutside = () => {
    setIsOpen(false);
  };

  return (
    <PopoverPrimitive.Root open={isOpen}>
      <PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <>
          <div className="fixed inset-0 bg-black opacity-15" />
          <PopoverPrimitive.Content
            side="top"
            sideOffset={12}
            className={cn('bg-white rounded-lg shadow-md', className)}
            onInteractOutside={onClickOutside}
          >
            {content}
          </PopoverPrimitive.Content>
        </>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
};
