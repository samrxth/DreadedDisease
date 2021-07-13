import React from 'react';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import MaskWearing from '../svg/MaskWearing';
import Vaccine from '../svg/Vaccine';
import SocialDistancing from '../svg/SocialDistancing';
import WashHands from '../svg/WashHands';
import Coughing from '../svg/Coughing';

const Precautions = () => {
  return (
    <Layout route="/precautions">
      <div className="h-screen bg-gray-900">
        <div className="pt-20 mx-auto text-center">
          <h2 className="text-6xl font-semibold text-primary-lighter">Precautions</h2>
        </div>
        <SplitSection
          id="vaccines"
          dark
          primarySlot={
            <div className="lg:pr-20 xl:pr-32">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">Get Vaccinated</h3>
              <p className="leading-relaxed text-gray-400 text-md md:text-xl">
                Covid-19 vaccines produce antibodies to the coronavirus. These antibodies help your
                immune system fight the virus if you happen to be exposed, so it reduces your chance
                of getting the disease.
              </p>
            </div>
          }
          secondarySlot={<Vaccine />}
        />
        <SplitSection
          id="social-distancing"
          reverseOrder
          primarySlot={
            <div className="lg:pr-20 xl:pr-32 lg:pl-10">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Social Distancing
              </h3>
              <p className="pt-2 leading-relaxed text-gray-700 text-md md:text-xl">
                When there are large gatherings, the chances of the virus spreading quickly and to
                many people are highly likely. Practicing social distancing helps to reduce
                opportunities for disease transmission.
              </p>
            </div>
          }
          secondarySlot={<SocialDistancing />}
        />
        <SplitSection
          id="masks"
          dark
          primarySlot={
            <div className="py-40 lg:pr-20 xl:pr-32">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">Wear masks</h3>
              <p className="leading-relaxed text-gray-400 text-md md:text-xl">
                Masks are a simple barrier to help prevent your respiratory droplets from reaching
                others. Studies show that masks reduce the spray of droplets when worn over the nose
                and mouth. You should wear a mask, even if you do not feel sick.
              </p>
            </div>
          }
          secondarySlot={<MaskWearing />}
        />
        <SplitSection
          id="wash-hands"
          reverseOrder
          primarySlot={
            <div className="lg:pr-20 xl:pr-32">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
                Wash your hands often
              </h3>
              <p className="leading-relaxed text-gray-700 text-md md:text-xl">
                Wash your hands often with soap and water for at least 20 seconds especially after
                you have been in a public place, or after blowing your nose, coughing, or sneezing.
              </p>
            </div>
          }
          secondarySlot={<WashHands />}
        />
        <SplitSection
          id="masks"
          dark
          noBottomPadding
          primarySlot={
            <div className="py-24 lg:pr-20 xl:pr-32">
              <h3 className="text-3xl font-semibold leading-tight md:text-4xl">Cover your mouth while coughing</h3>
              <p className="leading-relaxed text-gray-400 text-md md:text-xl">
                <ul className="list-disc list-outside">
                  <li className="pt-4">
                    <b>If you are wearing a mask: </b>You can cough or sneeze into your mask. Put on
                    a new, clean mask as soon as possible and wash your hands.
                  </li>
                  <li className="pt-8">
                    <b>If you are not wearing a mask: </b>
                    <ul className="list-disc list-inside">
                      <li className="pt-4">
                        Always cover your mouth and nose with a tissue when you cough or sneeze, or
                        use the inside of your elbow and do not spit.
                      </li>
                      <li className="pt-4">Throw used tissues in the trash.</li>
                    </ul>
                  </li>
                </ul>
              </p>
            </div>
          }
          secondarySlot={<Coughing />}
        />

        <p className="py-10 text-center text-gray-500">
          Made by <a href="https://github.com/samrath2007/">Samrath Singh Chadha</a>
        </p>
      </div>
    </Layout>
  );
};

export default Precautions;
