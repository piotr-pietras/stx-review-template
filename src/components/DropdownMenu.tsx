import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import { ReactNode } from 'react';
import cn from 'clsx';

type Props = {
  children: ReactNode;
  onDeleteClick: () => void;
};

type ItemProps = {
  children: ReactNode;
  onSelect: (event: Event) => void;
  className?: string;
};

const Item = ({ children, onSelect, className }: ItemProps) => {
  return (
    <DropdownMenuPrimitive.Item
      onSelect={onSelect}
      className={cn(
        'flex items-center h-8 py-5 px-4 cursor-pointer outline-none hover:bg-neutral-50 rounded-md',
        className
      )}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  );
};

export const DropdownMenu = ({ children, onDeleteClick }: Props) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger className="outline-none">
        {children}
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          side="bottom"
          align="end"
          className="w-40 bg-white rounded-md outline-none mt-1 shadow-md border border-gray-100"
        >
          <Item className="text-red-500" onSelect={onDeleteClick}>
            Delete
          </Item>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};
