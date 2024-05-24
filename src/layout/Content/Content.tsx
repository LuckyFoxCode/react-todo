import { Dashboard } from '@/pages';
import { Route, Routes } from 'react-router-dom';

export const Content: React.FC = () => {
  return (
    <main className='w-full px-20 pb-8'>
      <Routes>
        <Route
          path='/'
          element={<Dashboard />}
        />
      </Routes>
    </main>
  );
};
