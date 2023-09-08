import React from 'react';

export const SpriteSVG = ({ name }) => {
  switch (name) {
    case 'close':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="#121417"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#121417"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'heart':
      return (
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.6301 2.4575C15.247 2.07425 14.7922 1.77023 14.2916 1.56281C13.791 1.35539 13.2545 1.24863 12.7126 1.24863C12.1707 1.24863 11.6342 1.35539 11.1336 1.56281C10.633 1.77023 10.1782 2.07425 9.79509 2.4575L9.00009 3.2525L8.20509 2.4575C7.43132 1.68373 6.38186 1.24903 5.28759 1.24903C4.19331 1.24903 3.14386 1.68373 2.37009 2.4575C1.59632 3.23127 1.16162 4.28072 1.16162 5.375C1.16162 6.46927 1.59632 7.51873 2.37009 8.2925L3.16509 9.0875L9.00009 14.9225L14.8351 9.0875L15.6301 8.2925C16.0133 7.90943 16.3174 7.45461 16.5248 6.95401C16.7322 6.45342 16.839 5.91686 16.839 5.375C16.839 4.83313 16.7322 4.29657 16.5248 3.79598C16.3174 3.29539 16.0133 2.84056 15.6301 2.4575Z"
            stroke="white"
            strokeOpacity="0.8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
};
