import { Box } from '@/components/common';

export const Dashboard: React.FC = () => {
  return (
    <Box position='col'>
      <Box className='justify-between mb-[30px]'>
        <p className='text-4xl transition-colors text-black dark:text-white'>
          Welcome back, Sanchin 👋
        </p>
        <Box>
          <Box className='gap-x-1 mr-5'>
            <div className='size-9 rounded-[8px] bg-blue-400' />
            <div className='size-9 rounded-[8px] bg-blue-400' />
            <div className='size-9 rounded-[8px] bg-blue-400' />
            <div className='size-9 rounded-[8px] bg-blue-400' />
            <div className='size-9 rounded-[8px] bg-blue-400' />
          </Box>
          <button>Invite</button>
        </Box>
      </Box>
    </Box>
  );
};
