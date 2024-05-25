import { Box, Button } from '@/components/common';
import { useState } from 'react';
import { MdGroupAdd } from 'react-icons/md';

export const InviteUser: React.FC = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [count, setCount] = useState(1);

  const maxVisibleAvatars = 5;
  const visibleAvatars = users.slice(0, maxVisibleAvatars);
  const extraAvatarsCount = users.length - maxVisibleAvatars;

  const handleInviteUser = () => {
    setUsers((prev) => [
      ...prev,
      `https://randomuser.me/api/portraits/men/${count}.jpg`,
    ]);
    setCount((prev) => prev + 1);
  };

  return (
    <Box>
      <Box className='relative gap-x-1 mr-5 transition-all'>
        {visibleAvatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar}
            alt='avatar'
            className='size-10 rounded-[8px] object-cover animate-fadeInScaleIn'
          />
        ))}
        {extraAvatarsCount > 0 && (
          <div className='absolute top-0 right-0 size-10 rounded-[8px] flex justify-center items-center bg-slate-500/35'>
            <span className='font-montserrat text-white text-sm'>
              +{extraAvatarsCount}
            </span>
          </div>
        )}
      </Box>
      <Button
        withIcon
        iconName={MdGroupAdd}
        iconSize={16}
        onClick={handleInviteUser}
        className='flex items-center text-sm text-red-400 p-2 pl-4 border border-red-400 rounded-lg hover:bg-red-400 hover:text-white'
      >
        <span className='ml-2'>Invite</span>
      </Button>
    </Box>
  );
};
