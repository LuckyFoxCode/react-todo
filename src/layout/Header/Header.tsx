import { Box } from '@/ui';
import { Date, GroupButton, Logo } from './ui';

export const Header = () => {
  return (
    <header className='w-full flex items-center justify-between py-3 px-2 mb-[55px] bg-slate-100 shadow-lg shadow-slate-200 transition-all dark:bg-slate-800 dark:shadow-slate-500 md:justify-start md:py-[20px] md:px-[35px] lg:py-[30px] lg:px-[70px]'>
      <Box className='md:flex-1'>
        <Logo />
      </Box>
      <GroupButton />
      <Date />
    </header>
  );
};
