import React from 'react';

type ReactNode = {
  reverse: boolean;
  children: React.ReactNode;
};

export default function Card({ children, reverse }: ReactNode) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0, 0.4)' : 'white',
        color: reverse ? 'white' : 'black',
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};
