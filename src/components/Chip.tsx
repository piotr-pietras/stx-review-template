import { XMarkIcon } from '@heroicons/react/16/solid';

type Props = {
  children: string;
  onClose: () => void;
};
export const Chip = ({ children, onClose }: Props) => {
  return (
    <span className="flex items-center bg-white text-stone-700 text-xs px-2 py-1 rounded-full">
      {children}
      <button onClick={onClose} className="size-5 ml-1 cursor-pointer">
        <XMarkIcon className="size-full" />
      </button>
    </span>
  );
};
