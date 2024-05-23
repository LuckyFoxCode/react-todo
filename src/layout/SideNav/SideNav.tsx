import { AsideNav } from '@/components';
import { UserAvatar, UserInfo } from './ui';

export const SideNav: React.FC = () => {
  return (
    <aside className='relative w-full max-w-[330px] px-5 pt-[55px] pb-8 rounded-r-[8px] bg-red-400 text-white shadow-lg shadow-slate-400'>
      <UserAvatar />
      <UserInfo />
      <AsideNav />
    </aside>
  );
};
