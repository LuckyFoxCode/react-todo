import { Box, Icon } from '@/ui';
import { cn } from '@/utils/libs';
import { CiBellOn, CiCalendar, CiDark, CiLight } from 'react-icons/ci';

interface GroupButtonProps {
  className?: string;
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GroupButton: React.FC<GroupButtonProps> = ({
  className,
  theme,
  setTheme,
}) => {
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
      <button
        className={style}
        onClick={() => setTheme((prev) => !prev)}
      >
        <Icon
          name={theme ? CiLight : CiDark}
          className='fill-white'
        />
      </button>
    </Box>
  );
};