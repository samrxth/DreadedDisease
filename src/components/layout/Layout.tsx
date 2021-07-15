import React, {useEffect} from 'react';
import Header from './Header';
import {Helmet} from 'react-helmet';
import ReactGA from 'react-ga';

type LayoutProps = {
  children: React.ReactNode;
};

ReactGA.initialize('G-410KJV89QC');

const Layout = (props: LayoutProps) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

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
