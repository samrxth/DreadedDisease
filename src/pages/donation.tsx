import React from 'react';
// import Button from '../components/Button';
import Card from '../components/Card';
import DonationData from '../data/DonationData';
import Layout from '../components/layout/Layout';

const Donation = () => (
  <Layout>
    <div className="h-screen">
      <div className="pt-10 mx-auto text-center">
        <h2 className="text-5xl font-semibold text-primary-lighter">Donation</h2>
      </div>

      <div className="p-10 bg-white grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {DonationData.map((i) => {
          return (
            <Card key={i.key} title={i.title} description={i.description} externalUrl={i.url} imageUrl={i.imgSource} />
          );
        })}
      </div>
    </div>
    <p className="py-10 text-center text-gray-500">
      Made by <a href="https://github.com/samrath2007/">Samrath Singh Chadha</a>
    </p>
  </Layout>
);

export default Donation;
