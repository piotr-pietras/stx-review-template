import { EllipsisVerticalIcon } from '@heroicons/react/16/solid';
import { Todo } from '../../types/Todo';
import { Checkbox } from '../../components/Checkbox';
import { DropdownMenu } from '../../components/DropdownMenu';
import { dateFormatter } from '../../utils/dateFormatter';

type Props = {
  item: Todo;
  onDeleteButtonClick: () => void;
  onCheckboxClick: () => void;
};

export const Element = ({
  item,
  onDeleteButtonClick,
  onCheckboxClick,
}: Props) => {
  const { name, createdAt, done, id } = item;

  const formattedDate = dateFormatter(createdAt);

  return (
    <div className="w-full h-12 bg-white rounded-lg flex justify-between items-center pr-3 relative overflow-hidden">
      <div className="flex justify-between items-center h-full w-full outline-none px-1">
        <div className="flex items-center gap-2">
          <Checkbox id={id} checked={done} onCheckChange={onCheckboxClick} />
          <h3 className="text-stone-700 font-medium">{name}</h3>
        </div>
        <span className="text-stone-700 justify-end text-sm bg-stone-100 rounded-md h-8 flex items-center px-2 gap-x-1">
          <CalendarDaysIcon className="size-4" />
          {formattedDate}
        </span>
          {formattedDate}
        </span>
      </div>
      <DropdownMenu onDeleteClick={onDeleteButtonClick}>
        <div className="w-7 h-8 bg-stone-100 rounded-md cursor-pointer flex items-center justify-center outline-none">
          <EllipsisVerticalIcon className="text-black w-5" />
        </div>
      </DropdownMenu>
    </div>
  );
};
