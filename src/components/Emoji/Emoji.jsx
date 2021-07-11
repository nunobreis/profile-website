import React from 'react';
import { string } from 'prop-types';

const Emoji = ({ label, symbol, ...props }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label || ''}
    aria-hidden={label ? 'false' : 'true'}
    {...props}
  >
    {symbol}
  </span>
);

Emoji.propTypes = {
  label: string,
  symbol: string,
};

export default Emoji;
