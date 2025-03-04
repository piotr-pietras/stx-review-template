import cn from 'clsx';
import { ButtonHTMLAttributes, ReactNode, Ref } from 'react';

interface ButttonProops {
  children: ReactNode;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  isDisabled?: boolean;
  className?: string;
  ref?: Ref<HTMLButtonElement>;
}

// I think I'll need to add the highlight functionality in here

export const MyButtonComponent = ({
  children,
  onClick,
  type = 'button',
  isDisabled,
  className,
  ref,
  ...props
}: ButttonProops) => {
  const canHandleTheClick = false;

  const onChange = () => {};

  const onButtonClick = () => {
    if (!isDisabled && onClick) {
      onClick();
    } else {
      return;
    }
  };

  const result = (
    <button
      className={cn(className, 'cursor-pointer')}
      type={type}
      onClick={onButtonClick}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );

  return result;
};
