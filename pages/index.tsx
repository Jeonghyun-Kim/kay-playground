import React from 'react';
import cn from 'classnames';
import { Layout } from '@components/core';

export default function Home() {
  return (
    <div className={cn('mx-auto', 'bg-gray-400', 'w-1/2')}>hello world!</div>
  );
}

Home.Layout = Layout;
