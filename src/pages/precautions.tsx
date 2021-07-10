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

      <div className="bg-gray-900">
        <div className="container mx-auto text-center pt-20">
          <h2 className="text-4xl md:text-6xl font-semibold text-primary-lighter">
            Precautions
          </h2>
        </div>
        </div>
      <SplitSection
        id="services"
        dark
        primarySlot={
          <div className="lg:pr-20 xl:pr-32">
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight">Wear a mask</h3>
            <p className="text-md md:text-xl font-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        }
        secondarySlot={<MaskWearing />}
      />
      <SplitSection
        reverseOrder
        id="services"
        primarySlot={
          <div className="lg:pr-20 xl:pr-32">
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight">Wear a mask</h3>
            <p className="text-md md:text-xl font-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        }
        secondarySlot={<MaskWearing />}
      />
      <SplitSection
        dark
        noBottomPadding
        id="services"
        primarySlot={
          <div className="lg:pr-20 xl:pr-32">
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight">Wear a mask</h3>
            <p className="text-md md:text-xl font-light leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        }
        secondarySlot={<MaskWearing />}
      />
    </Layout>
  );
};

export default Precautions;
