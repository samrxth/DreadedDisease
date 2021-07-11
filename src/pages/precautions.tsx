import React from 'react';
import SplitSection from '../components/SplitSection';
import MaskWearing from '../svg/MaskWearing';
import Vaccine from '../svg/Vaccine';
import SocialDistancing from '../svg/SocialDistancing';
import Layout from '../components/layout/Layout';

const Precautions = () => {
  return (
    <Layout route="/precautions">
      <div className="h-screen bg-gray-900">
        <div className="mx-auto text-center pt-20">
          <h2 className="text-6xl font-semibold text-primary-lighter">Precautions</h2>
        </div>
        <SplitSection
          id="services"
          dark
          primarySlot={
            <div className="lg:pr-20 xl:pr-32">
              <h3 className="text-3xl md:text-4xl font-semibold leading-tight">Get Vaccinated</h3>
              <p className="text-md md:text-xl text-gray-400 leading-relaxed">
                Covid-19 vaccines producie antibodies to the coronavirus. These antibodies help your
                immune system fight the virus if you happen to be exposed, so it reduces your chance
                of getting the disease.
              </p>
            </div>
          }
          secondarySlot={<Vaccine />}
        />
        <SplitSection
          id="services"
          reverseOrder
          primarySlot={
            <div className="lg:pr-20 xl:pr-32">
              <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
                Social Distancing
              </h3>
              <p className="text-md md:text-xl text-gray-700 leading-relaxed">
                When there are large gatherings, the chances of the virus spreading quickly and to
                many people are highly likely. Practicing social distancing helps to reduce
                opportunities for disease transmission.
              </p>
            </div>
          }
          secondarySlot={<SocialDistancing />}
        />
        <SplitSection
          id="services"
          dark
          primarySlot={
            <div className="lg:pr-20 xl:pr-32">
              <h3 className="text-3xl md:text-4xl font-semibold leading-tight">Wear masks</h3>
              <p className="text-md md:text-xl text-gray-400 leading-relaxed">
                Masks are a simple barrier to help prevent your respiratory droplets from reaching
                others. Studies show that masks reduce the spray of droplets when worn over the nose
                and mouth. You should wear a mask, even if you do not feel sick.
              </p>
            </div>
          }
          secondarySlot={<MaskWearing />}
        />
      </div>
    </Layout>
  );
};

export default Precautions;
