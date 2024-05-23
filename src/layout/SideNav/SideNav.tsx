import { AsideNav } from '@/components';
import { UserAvatar, UserInfo } from './ui';

export const SideNav: React.FC = () => {
  return (
    <aside className='flex flex-col relative w-full max-w-[320px] h-[calc(100vh-119px)] px-5 pt-[55px] pb-8 rounded-r-[8px] bg-red-400 text-white shadow-lg shadow-slate-400 md:h-[calc(100vh-155px)] lg:h-[calc(100vh-175px)]'>
      <UserAvatar />
      <UserInfo />
      <AsideNav />
    </aside>
  );
};
