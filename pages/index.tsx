import React from 'react';
// import cn from 'classnames';
import { Layout } from '@components/core';
import styled from 'styled-components';
import { Button, Text, Input } from '@components/ui';
import { useUI } from '@components/ui/context';

const Root = styled.div.attrs(() => ({
  className: `mx-auto w-1/2`,
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
      <Input label="required" placeholder="Hello I'm required" required />
      <Input label="optional" placeholder="I am optional input field" />
    </Root>
  );
}

Home.Layout = Layout;
