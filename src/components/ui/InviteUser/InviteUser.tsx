import { Box, Button } from '@/components/common';
import { MdGroupAdd } from 'react-icons/md';

export const InviteUser: React.FC = () => {
  const handleInviteUser = () => {
    console.log('invite user');
  };

  return (
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
        onClick={handleInviteUser}
        className='flex items-center text-sm text-red-400 p-2 border border-red-400 rounded-lg'
      >
        <span className='ml-2'>Invite</span>
      </Button>
    </Box>
  );
};
