import React from 'react';
import SplitSection from '../components/SplitSection';
import MaskWearing from '../svg/MaskWearing';
import Layout from '../components/layout/Layout';
import {Helmet} from 'react-helmet';

const Precautions = () => {
  return (
    <Layout route="/precautions">
      <Helmet>
        <title>Infection Prevention</title>
      </Helmet>

      <div className="h-screen bg-gray-900">
        <div className="container mx-auto text-center pt-20">
          <h2 className="text-6xl font-semibold text-primary-lighter">Precautions</h2>
          <h3 className="text-3xl md:text-4xl font-semibold leading-tight pt-6 pb-10 text-white">
            Wear a mask
          </h3>
          <h3 className="text-3xl md:text-4xl font-semibold leading-tight pt-6 pb-10 text-white">
            Get vaccinated
          </h3>
          <h3 className="text-3xl md:text-4xl font-semibold leading-tight pt-6 pb-10 text-white">
            Avoid Crowds
          </h3>
          <h3 className="text-3xl md:text-4xl font-semibold leading-tight pt-6 pb-10 text-white">
            Go out only when necessary
          </h3>
        </div>
      </div>
    </Layout>
  );
};

export default Precautions;
