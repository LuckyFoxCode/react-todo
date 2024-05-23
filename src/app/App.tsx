import { Header, SideNav } from '@/layout';

export const App = () => {
  return (
    <>
      <Header />
      <main className='flex pt-14'>
        <SideNav />
      </main>
    </>
  );
};
