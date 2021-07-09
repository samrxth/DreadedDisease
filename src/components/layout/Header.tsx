import {Link} from 'gatsby';
import React from 'react';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 shadow glassmorphism-75 z-50">
    <div className="container flex flex-row justify-between items-center mx-auto py-4 px-8">
      <Link to="/">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
            <LogoIcon/>
          </div>
          <p className="hidden sm:block">Infection Prevention</p>
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
