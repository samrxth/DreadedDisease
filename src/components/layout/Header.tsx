import { Link } from 'gatsby';
import React from 'react';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

type HeaderProps = {
  route?: string;
};

const Header = (props: HeaderProps) => (
  <header
    className={`sticky top-0 shadow ${
      props.route
        ? props.route === '/precautions'
          ? 'glassmorphism-75'
          : 'glassmorphism-50'
        : 'glassmorphism-50'
    } z-50`}
  >
    <div className="container flex flex-row justify-between items-center mx-auto py-4 px-8">
      <Link to="/">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
            <LogoIcon />
          </div>
          <p className="hidden sm:block">The Dreaded Disease</p>
        </div>
      </Link>
      <div>
        <Link to="/donation">
          <Button className="text-lg">Donate</Button>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
