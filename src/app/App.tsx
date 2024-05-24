import { Box } from '@/components/common';
import { Content, Header, SideNav } from '@/layout';

export const App = () => {
  return (
    <>
      <Header />
      <Box>
        <SideNav />
        <Content />
      </Box>
    </>
  );
};
