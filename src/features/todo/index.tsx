import { format } from 'date-fns';
import { useGetTodoList } from '../../api/useGetTodoList';
import { Element } from './Element';
import { MyButtonComponent } from '../../components/Button';
import { Popover } from '../../components/Popover';
import { PlusIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { AddPopoverContent } from './AddPopoverContent';
import { useRemoveTodo } from '../../api/useRemoveTodo';

const DATE_FORMAT = 'EEE d MMMM y';

export const TodoList = () => {
  const { data } = useGetTodoList();
  const { mutate } = useRemoveTodo();

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const today = new Date();
  const todayFormatted = format(today, DATE_FORMAT);

  const onAddButtonClick = () => setIsPopoverOpen(true);

  const onDeleteButtonClick = (id: string) => mutate(id);

  return (
    <>
      <div className="max-w-200 w-full py-6 relative mx-auto">
        <h1 className="text-2xl text-gray-800 font-bold mb-1">
          Good Morning! 👋🏼
        </h1>
        <p className="text-xl text-gray-500 font-light">
          Today, {todayFormatted}
        </p>
        <div className="flex flex-col min-h-120 gap-y-2 py-6">
          {data?.map((item) => (
            <Element
              item={item}
              onDeleteButtonClick={() => onDeleteButtonClick(item.id)}
            />
          ))}
        </div>
        <Popover
          isOpen={isPopoverOpen}
          setIsOpen={setIsPopoverOpen}
          content={
            <AddPopoverContent
              value={inputValue}
              onValueChange={setInputValue}
            />
          }
          className="w-200"
        >
          <MyButtonComponent
            onClick={onAddButtonClick}
            className="bg-stone-900 h-15 text-white rounded-full flex items-center justify-start px-6 w-full gap-x-2"
          >
            <PlusIcon className="size-5" />
            Create a new task
          </MyButtonComponent>
        </Popover>
      </div>
    </>
  );
};
