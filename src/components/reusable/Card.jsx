import React from 'react';

export default function Card({ children, reverse }) {
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
