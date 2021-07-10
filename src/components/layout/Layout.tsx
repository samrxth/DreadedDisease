import React from 'react';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode,
  route ?: string
}
const Layout = (props: LayoutProps) => {
  return (
    <>
      {props.route? <Header route={props.route}/>: <Header />}
      <main className="text-gray-900">{props.children}</main>
    </>
  );
};

export default Layout;
