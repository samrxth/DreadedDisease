import Zoom from 'react-reveal/Zoom';
import {Link} from 'gatsby';
import React from 'react';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import HeroImage from '../svg/HeroImage';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40 md:pl-32 pb-4">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Preventing the third wave
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Loss of life and livelihood are a few calamities that befell upon us in the second wave
            of Covid-19. To prevent such a thing happening again we must take adequate precautions
          </p>
          <p className="mt-8 md:mt-12">
            <Link to="/precautions">
              <Button size="lg">
                <h3 className="text-lg md:text-xl lg:text-2xl">Learn more</h3>
              </Button>
            </Link>
          </p>
        </div>
        <Zoom>
          <HeroImage />
        </Zoom>
      </div>
    </section>

    <section className="bg-gray-900 text-center" id="donation">
      <div className="pb-24 pt-10 px-6">
        <h3 className="text-5xl font-semibold text-white">Want to help people fight covid 19?</h3>
        <p className="mt-10">
          <Link to="/donation">
            <Button size="xl">
              <h2 className="text-xl">Donate Now</h2>
            </Button>
          </Link>
        </p>
      </div>
    </section>
  </Layout>
);

export default Index;
