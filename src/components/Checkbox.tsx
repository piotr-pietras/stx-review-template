import { CheckIcon } from '@heroicons/react/16/solid';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import cn from 'clsx';

interface Props {
  id: string;
  checked: boolean;
  onCheckChange: () => void;
}
export const Checkbox = ({ id, checked, onCheckChange }: Props) => {
  return (
    <CheckboxPrimitive.Root
      id={id}
      checked={checked}
      onCheckedChange={onCheckChange}
      className="h-full w-11 flex justify-center items-center outline-none cursor-pointer"
    >
      <div
        className={cn(
          'size-5 border-2 rounded-md',
          checked && 'bg-stone-900 border-stone-900',
          !checked && 'bg-white border-neutral-300'
        )}
      >
        <CheckboxPrimitive.Indicator
          className={cn(!checked && 'text-stone-900', checked && 'text-white')}
          id={id}
        >
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </div>
    </CheckboxPrimitive.Root>
  );
};
