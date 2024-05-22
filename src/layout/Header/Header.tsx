import { Date, Logo } from './ui';

export const Header = () => {
  return (
    <header className='flex justify-between items-center py-[30px] px-[70px] bg-slate-100 shadow-lg shadow-slate-200'>
      <Logo />
      <Date />
    </header>
  );
};
