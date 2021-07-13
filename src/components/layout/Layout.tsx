import React from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';

type LayoutProps = {
  children: React.ReactNode;
  route?: string;
};

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>The Dreaded Disease</title>
      </Helmet>

      {props.route ? <Header route={props.route} /> : <Header />}
      <main className="text-gray-900">{props.children}</main>
    </>
  );
};

export default Layout;
