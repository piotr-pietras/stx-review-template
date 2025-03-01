import { ChangeEvent, SyntheticEvent, useRef } from 'react';
import { useAddTodo } from '../../api/useAddTodo';
import { v4 as uuid } from 'uuid';
import { Button } from '../../components/Button';
import cn from 'clsx';

type Props = {
  onAddingSuccess: () => void;
  value: string;
  onValueChange: (value: string) => void;
};

export const AddPopoverContent = ({
  onAddingSuccess,
  value,
  onValueChange,
}: Props) => {
  const { mutate, isPending } = useAddTodo();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const text = isPending ? 'Adding...' : 'Save Changes';

  const onClick = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!value.length) {
      return;
    }

    mutate(
      { id: uuid(), name: value, createdAt: Date.now() },
      {
        onSuccess: () => {
          onValueChange('');
          onAddingSuccess();
        },
      }
    );
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    onValueChange(e.target.value);

  return (
    <form
      className="flex flex-col w-full p-4 gap-2 justify-between"
      onSubmit={onClick}
    >
      <input
        className="w-full h-12 px-4 rounded-md border-1 border-gray-300 outline-none text-stone-700 font-medium"
        placeholder="Create new task"
        ref={inputRef}
        value={value}
        onChange={onChange}
      />
      <Button
        className={cn(
          'w-full h-14 rounded-full text-white',
          isPending ? 'bg-gray-300' : 'bg-indigo-600'
        )}
        isDisabled={isPending}
        type="submit"
      >
        {text}
      </Button>
    </form>
  );
};
