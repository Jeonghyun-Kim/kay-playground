import React from 'react';
// import cn from 'classnames';
import { Layout } from '@components/core';
import styled from 'styled-components';
import { Button } from '@components/ui';
import { useUI } from '@components/ui/context';

const Root = styled.div.attrs(() => ({
  className: `mx-auto bg-gray-400 w-1/2`,
}))``;

export default function Home() {
  const { openModal, setModalView } = useUI();

  const handleTestModalOpen = React.useCallback(() => {
    setModalView('TEST_VIEW');
    openModal();
  }, []);

  return (
    <Root>
      <Button onClick={() => handleTestModalOpen()}>Click Me!</Button>
    </Root>
  );
}

Home.Layout = Layout;
