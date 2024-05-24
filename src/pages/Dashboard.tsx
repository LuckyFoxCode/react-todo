import { Box } from '@/components/common';
import { InviteUser } from '@/components/ui';

export const Dashboard: React.FC = () => {
  return (
    <Box position='col'>
      <Box className='justify-between mb-[30px]'>
        <p className='text-4xl transition-colors text-black dark:text-white'>
          Welcome back, Sanchin 👋
        </p>
        <InviteUser />
      </Box>
    </Box>
  );
};
