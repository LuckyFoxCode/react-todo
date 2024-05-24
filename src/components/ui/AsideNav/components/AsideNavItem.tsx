import { Icon } from '@/components/common';
import { cn } from '@/utils/libs';
import { NavRouters } from '@/utils/types';
import { NavLink } from 'react-router-dom';

interface AsideNavItemProps {
  router: NavRouters;
}

export const AsideNavItem: React.FC<AsideNavItemProps> = ({ router }) => {
  return (
    <li>
      <NavLink
        to={router.path}
        className={({ isActive }) =>
          cn(
            isActive ? ' bg-white text-red-400' : 'bg-red-400 text-white',
            'flex items-center p-4 rounded-lg transition-colors',
          )
        }
      >
        <Icon
          name={router.icon}
          size={24}
          className='mr-5'
        />
        <span>{router.name}</span>
      </NavLink>
    </li>
  );
};
