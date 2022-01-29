import React from 'react';
import PropTypes from 'prop-types';

function InputGeneric(
  { TestId, Type, Label, Placeholder, Class, ChangeEvent, Value, Name },
) {
  return (
    <label htmlFor={ TestId }>
      {Label}
      <input
        id={ TestId }
        data-testid={ TestId }
        type={ Type }
        className={ Class }
        placeholder={ Placeholder }
        value={ Value }
        name={ Name }
        onChange={ ChangeEvent }
      />
    </label>
  );
}

InputGeneric.defaultProps = {
  TestId: '',
  Type: 'text',
  Label: '',
  Placeholder: '',
  Class: '',
  Name: '',
};

InputGeneric.propTypes = {
  TestId: PropTypes.string,
  Type: PropTypes.string,
  Label: PropTypes.string,
  Placeholder: PropTypes.string,
  Class: PropTypes.string,
  ChangeEvent: PropTypes.func.isRequired,
  Value: PropTypes.string.isRequired,
  Name: PropTypes.string,
};

export default InputGeneric;
