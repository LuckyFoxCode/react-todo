import { Box, Icon } from '@/components/common';
import { navRouters } from '@/utils/consts';
import { CiLogout } from 'react-icons/ci';
import { AsideNavItem } from './components';

export const AsideNav: React.FC = () => {
  return (
    <Box
      position='col'
      className='flex-1 overflow-y-auto'
    >
      <ul className='flex flex-col flex-1 gap-y-[10px] mb-[10px]'>
        {navRouters.map((router) => (
          <AsideNavItem
            key={router.path}
            router={router}
          />
        ))}
      </ul>
      <Box className='flex flex-shrink-0 p-4 rounded-lg text-white'>
        <Icon
          name={CiLogout}
          size={24}
          className='mr-5'
        />
        <span>Logout</span>
      </Box>
    </Box>
  );
};
