import { Box } from '@/components/common';
import { Content, Header, SideNav } from '@/layout';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Box>
        <SideNav />
        <Content />
      </Box>
    </BrowserRouter>
  );
};
