import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import { ReactNode } from 'react';
import cn from 'clsx';

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

type Props = {
  children: ReactNode;
  onFilterDateAsc: () => void;
  onFilterDateDesc: () => void;
  onSortDone: () => void;
  onSortUndone: () => void;
};
export const ActionMenu = ({
  children,
  onFilterDateAsc,
  onFilterDateDesc,
  onSortDone,
  onSortUndone,
}: Props) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger className="outline-none text-black">
        {children}
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          side="bottom"
          align="end"
          className="w-60 bg-white text-black rounded-md outline-none mt-1 shadow-md border border-gray-100"
        >
          <Item onSelect={onFilterDateAsc}>Sort by Date ascending</Item>
          <Item onSelect={onFilterDateDesc}>Sort by Date descending</Item>
          <Item onSelect={onSortDone}>Show done tasks</Item>
          <Item onSelect={onSortUndone}>Show undone tasks</Item>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};
