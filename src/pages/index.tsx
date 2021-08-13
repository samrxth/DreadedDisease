import Zoom from 'react-reveal/Zoom';
import {Link} from 'gatsby';
import React from 'react';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import HeroImage from '../svg/HeroImage';

const Index = () => (
  <Layout>
    <section className="pt-20 pb-4 md:pt-40 md:pl-32">
      <div className="container px-8 mx-auto lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <p className="text-lg sm:hidden text-primary-darker">
            The Dreaded Disease
          </p>
          <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
            Preventing the third wave
          </h1>
          <p className="mt-6 text-xl font-light lg:text-2xl">
            Loss of life and livelihood are a few calamities that befell upon us
            in the second wave of Covid-19. In 2020 alone there were roughly 84
            million reported cases of Covid-19. To prevent such a thing
            happening again we must take adequate{' '}
            <Link to="/precautions">precautions.</Link>
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
    <iframe
      src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map"
      width="100%"
      height="600px"
      className="md:p-20 sm:p-10"
    ></iframe>

    <section className="text-center bg-gray-900" id="donation">
      <div className="px-6 pt-10 pb-24">
        <Link to="/donation">
          <h3 className="text-5xl font-semibold text-white">
            Want to help people fight covid 19?
          </h3>
        </Link>
        <p className="mt-10">
          <Link to="/donation">
            <Button size="xl">
              <h2 className="text-xl">Donate Now</h2>
            </Button>
          </Link>
        </p>
      </div>
    </section>
    <section className="text-center bg-gray-300" id="precautions">
      <div className="px-6 pt-10 pb-24">
        <Link to="/precautions">
          <h3 className="text-5xl font-semibold">
            Want to learn more about the precautions?
          </h3>
        </Link>
        <p className="mt-10">
          <Link to="/precautions">
            <Button size="xl">
              <h2 className="text-xl">Click Here</h2>
            </Button>
          </Link>
        </p>
      </div>
    </section>
  </Layout>
);

export default Index;
