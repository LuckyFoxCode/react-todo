import { Box, Icon } from '@/components/common';
import {
  CiCircleQuestion,
  CiDatabase,
  CiLogout,
  CiSettings,
  CiSquareInfo,
  CiStickyNote,
  CiViewList,
} from 'react-icons/ci';

export const AsideNav: React.FC = () => {
  return (
    <Box
      position='col'
      className='flex-1 overflow-y-auto'
    >
      <ul className='flex flex-col flex-1 gap-y-[10px] mb-[10px]'>
        <li className='flex items-center p-4 rounded-lg bg-white text-red-400'>
          <Icon
            name={CiDatabase}
            size={24}
            className='mr-5'
          />
          <span>Dashboard</span>
        </li>
        <li className='flex items-center p-4 rounded-lg bg-white text-red-400'>
          <Icon
            name={CiSquareInfo}
            size={24}
            className='mr-5'
          />
          <span>Vital Task</span>
        </li>
        <li className='flex items-center p-4 rounded-lg bg-white text-red-400'>
          <Icon
            name={CiStickyNote}
            size={24}
            className='mr-5'
          />
          <span>My Task</span>
        </li>
        <li className='flex items-center p-4 rounded-lg bg-white text-red-400'>
          <Icon
            name={CiViewList}
            size={24}
            className='mr-5'
          />
          <span>Task Categories</span>
        </li>
        <li className='flex items-center p-4 rounded-lg bg-white text-red-400'>
          <Icon
            name={CiSettings}
            size={24}
            className='mr-5'
          />
          <span>Settings</span>
        </li>
        <li className='flex items-center p-4 rounded-lg bg-white text-red-400'>
          <Icon
            name={CiCircleQuestion}
            size={24}
            className='mr-5'
          />
          <span>Help</span>
        </li>
      </ul>
      <Box className='flex flex-shrink-0 p-4 rounded-lg bg-white text-red-400'>
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
