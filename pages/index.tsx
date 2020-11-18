import React from 'react';
// import cn from 'classnames';
import { Layout } from '@components/core';
import styled from 'styled-components';
import { Button, Text, Input } from '@components/ui';
import { useUI } from '@components/ui/context';

const Root = styled.div``;

export default function Home() {
  const { openSidebar, openModal, setModalView } = useUI();

  const handleTestModalOpen = React.useCallback(() => {
    setModalView('TEST_VIEW');
    openModal();
  }, []);

  return (
    <Root className="mx-auto max-w-screen-xl px-2 pt-10 pb-20">
      <Button onClick={() => handleTestModalOpen()}>open modal</Button>
      <Button onClick={() => openSidebar()}>open sidebar</Button>
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
