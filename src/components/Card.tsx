import React from 'react';
import Button from '../components/Button'

type CardProps = {
  title: string | string[];
  description: string | string[];
};

const Card = (props: CardProps) => (
  <div
    className="
          rounded
          overflow-hidden
          shadow-lg
          hover:shadow-md
          duration-1000
          bg-white
        "
  >
    <img
      className="w-full"
      src="/static/unicef.png"
      alt="Mountain"
    />
    <div className="px-6 py-4">
      <div className="text-xl mb-2">
        <h2>{props.title}</h2>
      </div>
      <p className="text-gray-700 pb-2">{props.description}</p>
      <Button>Visit their website</Button> </div>
  </div>
);

export default Card;
