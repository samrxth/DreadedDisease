import { Link } from 'gatsby';
import React from 'react';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <nav
    className="sticky top-0 z-50 glassmorphism-75"
  >
    <div className="container flex flex-row items-center justify-between px-8 py-4 mx-auto">
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
  </nav>
);

export default Header;
