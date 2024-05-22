import { cn } from '@/utils/libs';
import { BoxStyles } from './box-styles';

interface BoxProps {
  className?: string;
  position?: 'row' | 'col';
  children?: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({
  className,
  children,
  position = 'row',
}) => {
  return (
    <div className={cn('flex', className, BoxStyles[position])}>{children}</div>
  );
};
