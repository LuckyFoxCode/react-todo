import moment from 'moment';

export const Date = () => {
  return (
    <div className='flex flex-col text-sm'>
      <span className='text-[15px]'>{moment().format('dddd')}</span>
      <span className='text-sky-400'>{moment().format('L')}</span>
    </div>
  );
};
