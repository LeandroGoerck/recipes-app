import React from 'react';
import PropTypes from 'prop-types';
import { SradioFilter, SlabelFilter } from '../../style/SearchBar';

function InputGeneric(
  { TestId, Type, Label, Placeholder, ChangeEvent, Value, Name, Class },
) {
  return (
    <SlabelFilter htmlFor={ TestId }>
      {Label}
      <SradioFilter
        id={ TestId }
        data-testid={ TestId }
        type={ Type }
        className={ Class }
        placeholder={ Placeholder }
        value={ Value }
        name={ Name }
        onChange={ ChangeEvent }
      />
    </SlabelFilter>
  );
}

InputGeneric.defaultProps = {
  TestId: '',
  Type: 'text',
  Label: '',
  Placeholder: '',
  Name: '',
  Class: '',
};

InputGeneric.propTypes = {
  TestId: PropTypes.string,
  Type: PropTypes.string,
  Label: PropTypes.string,
  Placeholder: PropTypes.string,
  ChangeEvent: PropTypes.func.isRequired,
  Value: PropTypes.string.isRequired,
  Class: PropTypes.string,
  Name: PropTypes.string,
};

export default InputGeneric;
