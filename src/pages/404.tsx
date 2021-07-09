import {Link} from 'gatsby';
import React from 'react';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';

const Index = () => (
  <Layout>
      <div className="w-9/12 m-auto flex items-center justify-center">
        <div className="bg-white overflow-hidden sm:rounded-lg pb-8">
          <div className="text-center pt-8">
            <h1 className="text-9xl font-bold text-purple-400">404</h1>
            <h1 className="text-6xl font-medium py-8">Page not found</h1>
            <p className="text-2xl pb-8 px-12 font-medium">The page you are looking for does not exist. It might have been moved or deleted.</p>
          <Link to="/">
            <Button size="lg">HOMEPAGE</Button>
          </Link>
          </div>
        </div>
    </div>

  </Layout>
);

export default Index;
