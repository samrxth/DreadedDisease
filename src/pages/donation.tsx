import React from 'react';
// import Button from '../components/Button';
import Card from '../components/Card';
import DonationData from '../data/DonationData'
import Layout from '../components/layout/Layout';

const Donation = () => (
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
        {
          DonationData.map((i) => {
            return (
              <Card key={i.key} title={i.title} description={i.description} externalUrl={i.url} imageUrl={i.imgSource} />
            )
        })
        }
      </div>
    </div>
  </Layout>
);

export default Donation;
