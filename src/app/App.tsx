import { Header, SideNav } from '@/layout';

export const App = () => {
  return (
    <>
      <Header />
      <main className='flex flex-col'>
        <SideNav />
      </main>
    </>
  );
};
