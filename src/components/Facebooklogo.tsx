import React from 'react';

const FacbookLogo = () => {
  const facebookUrl = 'https://www.facebook.com/bjavaxishvili';

  return (
    <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
      <defs>
        <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#63AFDB" />
          <stop offset="100%" stop-color="#6028F1" />
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
      />
    </svg>
    </a>
  );
};

export default FacbookLogo;