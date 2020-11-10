import React from 'react';
// import cn from 'classnames';
// import { useRouter } from 'next/router';

import { Root, Main } from './Layout.styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Root>
      <header />
      <Main>{children}</Main>
    </Root>
  );
};

export default Layout;
