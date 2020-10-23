import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ text }) => (
  <div data-testid="display">
    {text}
  </div>
);

Display.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Display;
