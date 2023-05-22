import { Children } from 'react';

const Layout = ({ Children }) => {
  return (
    <div>
      <Navbar />
      {Children}
      <Footer />
    </div>
  );
};

export default Layout;
