import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`,
};

type ButtonProps = {
  children: React.ReactNode,
  className ?: string,
  size ?: string
}
const Button = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[props.size] || sizes.default}
        ${props.className}
        bg-primary
        hover:bg-primary-darker
        rounded
        text-white
    `}
    >
      {props.children}
    </button>
  );
};

export default Button;
