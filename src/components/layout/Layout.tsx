import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';

type LayoutProps = { children: React.ReactNode };

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>The Dreaded Disease</title>
      </Helmet>
      <Header />
      <main className="flex-1 overflow-y-auto text-gray-900">
        {props.children}
      </main>
      <p className="py-10 text-center text-gray-500">
        Designed and developed by{' '}
        <a href="https://github.com/samrath2007/">
          Samrath Singh Chadha © 2021
        </a>
      </p>
    </>
  );
};

export default Layout;
