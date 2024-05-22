import { cn } from '@/utils/libs';
import { IconType } from 'react-icons';

interface IconProps {
  name: IconType;
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const Icon: React.FC<IconProps> = ({
  name: IconComponent,
  size = 16,
  className,
  onClick,
}) => {
  return (
    <IconComponent
      size={size}
      className={cn(className, 'cursor-pointer')}
      onClick={onClick}
    />
  );
};
