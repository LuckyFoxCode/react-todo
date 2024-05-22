import { Box } from '@/ui';
import { useState } from 'react';
import { Date, GroupButton, Logo } from './ui';

export const Header = () => {
  const [theme, setTheme] = useState<boolean>(false);
  return (
    <header className='w-full flex items-center py-[30px] px-[70px] bg-slate-100 shadow-lg shadow-slate-200'>
      <Box className='flex flex-1'>
        <Logo />
      </Box>
      <GroupButton
        theme={theme}
        setTheme={setTheme}
      />
      <Date />
    </header>
  );
};
