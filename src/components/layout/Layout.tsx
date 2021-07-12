import React from 'react';
import Header from './Header';
import {Helmet} from 'react-helmet';

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
      <main className="text-gray-900">{props.children}

      </main>
        <p className="py-10 text-center text-gray-500">Made by <a href="https://github.com/samrath2007/">Samrath Singh Chadha</a></p>
    </>
  );
};

export default Layout;
