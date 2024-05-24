import moment from 'moment';
import { useEffect, useState } from 'react';

export const Date = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col text-sm'>
      <p className='hidden text-red-300 md:flex'>{currentTime.format('LTS')}</p>
      <p className=' text-[15px] text-center transition-all dark:text-white'>
        {moment().format('dddd')}
      </p>
      <p className='text-sky-400'>{moment().format('L')}</p>
    </div>
  );
};
