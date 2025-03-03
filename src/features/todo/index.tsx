import { useGetTodoList } from '../../api/useGetTodoList';
import { Element } from './Element';
import { Button } from '../../components/Button';
import { Popover } from '../../components/Popover';
import { PlusIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { AddPopoverContent } from './AddPopoverContent';
import { useRemoveTodo } from '../../api/useRemoveTodo';
import { useChangeDone } from '../../api/useChangeDone';
import { dateFormatter } from '../../utils/dateFormatter';
import { ActionMenu } from '../../components/ActionsMenu';

export const TodoList = () => {
  const { data, isLoading } = useGetTodoList();
  const { mutate, isPending } = useRemoveTodo();
  const { mutate: mutateDone } = useChangeDone();

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const today = new Date();
  const todayFormatted = dateFormatter(today);

  const [sortType, setSortType] = useState<'asc' | 'desc' | null>(null);
  const [filterType, setFilterType] = useState<'done' | 'undone' | null>(null);

  const onAddButtonClick = () => setIsPopoverOpen(true);

  const onAddingSuccess = () => setIsPopoverOpen(false);

  const onDeleteButtonClick = (id: string) => mutate(id);

  const onCheckboxClick = (id: string) => mutateDone(id);

  const filteredAndSortedItems = (data || [])
    .filter((item) => {
      if (filterType === 'done' && !item.done) return false;
      if (filterType === 'undone' && item.done) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortType === 'asc')
        return a.createdAt.getTime() - b.createdAt.getTime();
      if (sortType === 'desc')
        return b.createdAt.getTime() - a.createdAt.getTime();
      return 0;
    });

  const doneCounter = filteredAndSortedItems.filter((item) => item.done).length;

  const doneCounterText =
    doneCounter === 0
      ? 'No tasks done yet'
      : `${doneCounter} ${doneCounter === 1 ? 'task' : 'tasks'} done`;

  return (
    <>
      {(isLoading || isPending) && (
        <div className="fixed inset-0 flex justify-center items-center z-10">
          <p className="text-2xl text-white font-bold z-20">Loading ...</p>
          <div className="bg-black size-full opacity-40 absolute" />
        </div>
      )}
      <div className="max-w-200 w-full py-6 relative mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl text-gray-800 font-bold mb-1">
              Good Morning! 👋🏼
            </h1>
            <p className="text-xl text-gray-500 font-light">
              Today, {todayFormatted}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            {sortType && (
              <Chip onClose={() => setSortType(null)}>
                {sortType === 'asc'
                  ? 'Sort by Date ascending'
                  : 'Sort by Date descending'}
              </Chip>
            )}
            {filterType && (
              <Chip onClose={() => setFilterType(null)}>
                {filterType === 'done'
                  ? 'Show done tasks'
                  : 'Show undone tasks'}
              </Chip>
            )}
            <ActionMenu
              children={
                <div className="h-8 px-3 bg-white rounded-md cursor-pointer flex items-center justify-center outline-none">
                  Menu
                </div>
              }
              onFilterDateAsc={() => setSortType('asc')}
              onFilterDateDesc={() => setSortType('desc')}
              onSortDone={() => setFilterType('done')}
              onSortUndone={() => setFilterType('undone')}
            />
          </div>
        </div>
        <div className="flex flex-col min-h-120 gap-y-2 py-6">
          {filteredAndSortedItems.map((item) => (
            <Element
              key={item.id}
              item={item}
              onDeleteButtonClick={() => onDeleteButtonClick(item.id)}
              onCheckboxClick={() => onCheckboxClick(item.id)}
            />
          ))}
          <span className="text-gray-500 pl-1">{doneCounterText}</span>
        </div>
        <Popover
          isOpen={isPopoverOpen}
          setIsOpen={setIsPopoverOpen}
          content={
            <AddPopoverContent
              onAddingSuccess={onAddingSuccess}
              value={inputValue}
              onValueChange={setInputValue}
            />
          }
          className="w-200"
        >
          <Button
            onClick={onAddButtonClick}
            className="bg-stone-900 h-15 rounded-full flex items-center justify-start px-6 w-full gap-x-2"
          >
            <PlusIcon className="size-5" />
            Create a new task
          </Button>
        </Popover>
      </div>
    </>
  );
};

const Chip = ({
  children,
  onClose,
}: {
  children: string;
  onClose: () => void;
}) => {
  return (
    <span className="flex items-center bg-white text-stone-700 text-xs px-2 py-1 rounded-full">
      {children}
      <XMarkIcon onClick={() => onClose()} className="size-3 ml-1" />
    </span>
  );
};
