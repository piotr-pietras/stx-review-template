import { EllipsisVerticalIcon } from '@heroicons/react/16/solid';
import { Checkbox } from '../../components/Checkbox';
import { DropdownMenu } from '../../components/DropdownMenu';

type Props = {
  item: { name: string; createdAt: number };
  onDeleteButtonClick: () => void;
};

export const Element = ({ item, onDeleteButtonClick }: Props) => {
  const { name } = item;

  return (
    <div className="w-full h-12 bg-white rounded-lg flex justify-between items-center pr-3 relative overflow-hidden">
      <div className="flex items-center h-full outline-none">
        <Checkbox />
        <h3 className="text-stone-700 font-medium">{name}</h3>
      </div>
      <DropdownMenu onDeleteClick={onDeleteButtonClick}>
        <div className="w-7 h-8 bg-stone-100 rounded-md cursor-pointer flex items-center justify-center outline-none">
          <EllipsisVerticalIcon className="text-black w-5" />
        </div>
      </DropdownMenu>
    </div>
  );
};
