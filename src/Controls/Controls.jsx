import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  text,
  onChange,
  onSubmit
}) => (
    <>
      <label htmlFor="text"></label>
      <input type="text"
        id="text"
        type="text"
        name="text"
        value={text}
        onChange={onChange}
      />

      <label htmlFor="text"></label>
      <input type="text"
        id="text"
        type="text"
        name="text"
        value={text}
        onChange={onChange}
      />

      <button onSubmit={onSubmit}>
        Send
      </button>

      <input type="radio"
        name="radio"
        value="get"
        onChange={onChange}
      />GET
      <input type="radio"
        name="radio"
        value="post"
        onChange={onChange}
      />POST
      <input type="radio"
        name="radio"
        value="put"
        onChange={onChange}
      />PUT
      <input type="radio"
        name="radio"
        value="delete"
        onChange={onChange}
      />DELETE
    </>
  );

Controls.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Controls;
