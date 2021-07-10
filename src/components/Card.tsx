import React from 'react';
import Button from '../components/Button';

type CardProps = {
  key: number;
  title: string;
  description: string;
  imageUrl: string;
  externalUrl: string;
};

const Card = (props: CardProps) => (
  <div
    key={props.key}
    className="
          rounded
          overflow-hidden
          shadow-lg
          hover:shadow-md
          duration-1000
          bg-white
        "
  >
    <div className="flex p-5 inline-block">
      <a href={props.externalUrl}>
        <img className="w-full mb-auto mt-auto" src={props.imageUrl} alt="" />
      </a>
    </div>
    <div className="px-6 py-4 pt-10">
      <a href={props.externalUrl}>
        <div className="text-xl mb-2">
          <h2>{props.title}</h2>
        </div>
      </a>
      <p className="text-gray-700 pb-2">{props.description}</p>
      <Button>Visit their website</Button>{' '}
    </div>
  </div>
);

export default Card;
