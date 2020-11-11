import React from 'react';
// import cn from 'classnames';
import { Layout } from '@components/core';
import styled from 'styled-components';
import { Button } from '@components/ui';

const Root = styled.div.attrs((props) => ({
  className: `mx-auto bg-gray-400 w-1/2`,
}))``;

export default function Home() {
  return (
    <Root>
      <Button>Click Me!</Button>
    </Root>
  );
}

Home.Layout = Layout;
