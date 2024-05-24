import { cn } from '@/utils/libs';
import { IconType } from 'react-icons';
import { Icon } from '../Icon';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  size?: 'form' | 'outline';
  withIcon?: boolean;
  iconName?: IconType;
  iconSize?: number;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  withIcon,
  iconName,
  iconSize,
  ...rest
}) => {
  const icon =
    withIcon && iconName ? (
      <Icon
        name={iconName}
        size={iconSize}
      />
    ) : null;

  return (
    <button
      {...rest}
      className={cn(className, 'transition-all ')}
    >
      {icon}
      {children}
    </button>
  );
};
