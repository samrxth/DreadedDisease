import Zoom from 'react-reveal/Zoom';
import {Link} from 'gatsby';
import React from 'react';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import HeroImage from '../svg/HeroImage';
import {Helmet} from 'react-helmet';

const Index = () => (
  <Layout>
    <Helmet>
      <title>Infection Prevention</title>
    </Helmet>
    <section className="pt-20 md:pt-40 md:pl-32 pb-4">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Preventing the third wave
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            The second wave has had a drastic effect on people with very high covid cases, to
            prevent such a thing happening we must take precaution
          </p>
          <p className="mt-8 md:mt-12">
            <Link
              to="/precautions"
            >
              <Button size="lg">
                <h3 className="text-md md:text-xl lg:text-2xl">Learn more about the precautions</h3>
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
      <div className="py-24 px-6">
        <h3 className="text-5xl font-semibold text-white">Want to help people fight covid 19?</h3>
        <p className="mt-10">
          <Link to="https://help.unicef.org/in/covid/jeevanrath?campaignID=7011i000000hyrIAAQ&campaignid=13613160620&adgroupid=123562181403&adid=530358488399">
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
