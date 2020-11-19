import React from 'react';
import styled from 'styled-components';
import { Layout } from '@components/core';
import { ArtworkUpload } from '@components/form';

const Root = styled.div``;

export default function Upload() {
  return (
    <Root className="max-w-5xl mx-auto py-5">
      <ArtworkUpload />
    </Root>
  );
}

Upload.Layout = Layout;
