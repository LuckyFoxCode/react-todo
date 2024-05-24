import { Box, Button } from '@/components/common';
import { MdGroupAdd } from 'react-icons/md';

export const Dashboard: React.FC = () => {
  return (
    <Box position='col'>
      <Box className='justify-between mb-[30px]'>
        <p className='text-4xl transition-colors text-black dark:text-white'>
          Welcome back, Sanchin 👋
        </p>
        <Box>
          <Box className='gap-x-1 mr-5'>
            <div className='size-10 rounded-[8px] bg-blue-400' />
            <div className='size-10 rounded-[8px] bg-blue-400' />
            <div className='size-10 rounded-[8px] bg-blue-400' />
            <div className='size-10 rounded-[8px] bg-blue-400' />
            <div className='size-10 rounded-[8px] bg-blue-400' />
          </Box>
          <Button
            withIcon
            iconName={MdGroupAdd}
            iconSize={16}
            className='flex items-center text-sm text-red-400 p-2 border border-red-400 rounded-lg'
          >
            <span className='ml-2'>Invite</span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
