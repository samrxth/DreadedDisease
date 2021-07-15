import React from 'react';
import Zoom from 'react-reveal/Zoom';

type SplitSectionProps = {
  id: string;
  primarySlot: React.ReactNode;
  secondarySlot: React.ReactNode;
  dark?: boolean;
  reverseOrder?: boolean;
  noBottomPadding?: boolean;
};
const SplitSection = (props: SplitSectionProps) => (
  <section id={props.id} className={`${!props.noBottomPadding && `pb-20`}`}>
    <div className={`pt-10 ${props.dark && `bg-gray-900 text-gray-100`}`}>
      <div
        className={`container mx-auto px-16 items-center flex flex-col lg:flex-row`}
      >
        <div className="lg:w-1/2">{props.primarySlot}</div>
        <div
          className={`mt-10 lg:mt-0 w-full lg:w-1/2 ${
            props.reverseOrder && `order-last lg:order-first`
          }`}
        >
          <Zoom>{props.secondarySlot}</Zoom>
        </div>
      </div>
    </div>
  </section>
);

export default SplitSection;
