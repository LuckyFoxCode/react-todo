import { ThemeSwitcher } from '@/components';
import { Box, Icon } from '@/ui';
import { cn } from '@/utils/libs';
import { CiBellOn, CiCalendar } from 'react-icons/ci';

interface GroupButtonProps {
  className?: string;
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GroupButton: React.FC<GroupButtonProps> = ({ className }) => {
  const style = 'p-2 rounded-md bg-red-400 focus:outline-none';

  return (
    <Box className={cn('gap-x-2 mr-10', className)}>
      <button className={style}>
        <Icon
          name={CiBellOn}
          className=' fill-white'
        />
      </button>
      <button className={style}>
        <Icon
          name={CiCalendar}
          className='fill-white'
        />
      </button>
      <ThemeSwitcher style={style} />
    </Box>
  );
};
