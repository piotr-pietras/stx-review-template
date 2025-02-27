import cn from 'clsx';
import { ButtonHTMLAttributes, ReactNode, Ref } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  isDisabled?: boolean;
  className?: string;
  ref?: Ref<HTMLButtonElement>;
};

export const Button = ({
  children,
  onClick,
  type = 'button',
  isDisabled,
  className,
  ref,
  ...props
}: Props) => {
  const onButtonClick = () => {
    if (isDisabled || !onClick) {
      return;
    }

    onClick();
  };

  return (
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
};
