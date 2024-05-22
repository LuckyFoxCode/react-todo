import moment from 'moment';

export const Date = () => {
  return (
    <div className='flex flex-col text-sm'>
      <p className=' text-[15px]'>{moment().format('dddd')}</p>
      <p className='text-sky-400'>{moment().format('L')}</p>
    </div>
  );
};
