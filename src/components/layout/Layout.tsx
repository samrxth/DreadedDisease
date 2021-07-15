import React, {useEffect} from 'react';
import Header from './Header';
import {Helmet} from 'react-helmet';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>The Dreaded Disease</title>
      </Helmet>

      <Header />
      <main className="flex-1 overflow-y-auto text-gray-900">{props.children}</main>
    </>
  );
};

export default Layout;
