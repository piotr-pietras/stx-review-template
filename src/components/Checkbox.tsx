import { CheckIcon } from '@heroicons/react/16/solid';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import cn from 'clsx';

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  const id = uuid();

  const onCheckChange = (value: boolean) => setChecked(value);

  return (
    <CheckboxPrimitive.Root
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
