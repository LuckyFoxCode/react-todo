import { Box } from '@/ui';

export const UserInfo: React.FC = () => {
  return (
    <Box
      position='col'
      className='items-center text-white mb-5'
    >
      <span>Sachin Vadhel</span>
      <span className='text-xs'>sachinvadhel@gmail.com</span>
    </Box>
  );
};
