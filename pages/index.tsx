import React from 'react';
// import cn from 'classnames';
import { Layout } from '@components/core';
import styled from 'styled-components';
import { Button, Text } from '@components/ui';
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
      <Text variant="body">BODY</Text>
      <Text variant="heading">HEllo I am Heading</Text>
      <Text variant="sectionHeading">Hi I'm SectionHeading</Text>
      <Text variant="pageHeading">PAGE HEADING</Text>
    </Root>
  );
}

Home.Layout = Layout;
