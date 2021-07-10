import React from 'react';
// import Button from '../components/Button';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';

const Index = () => (
  <Layout>
    <div className="h-screen">
      <div
        className="
        p-10
        grid grid-cols-1
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-3
        gap-5
          bg-white
      "
      >
        <Card title="Gavi/Covax" description="" />
      </div>
    </div>
  </Layout>
);

export default Index;
