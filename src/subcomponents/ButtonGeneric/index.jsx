import React from 'react';
import PropTypes from 'prop-types';

function ButtonGeneric({ TestId, Type, Text, Class, Disabled, ClickEvent }) {
  const buttonDisabled = (
    <button
      id={ TestId }
      data-testid={ TestId }
      type={ Type !== 'button' ? 'submit' : 'button' }
      className={ Class }
      disabled
    >
      {Text}
    </button>
  );

  const buttonEnabled = (
    <button
      id={ TestId }
      data-testid={ TestId }
      type={ Type !== 'button' ? 'submit' : 'button' }
      className={ Class }
      onClick={ ClickEvent }
    >
      {Text}
    </button>
  );

  return (Disabled ? buttonDisabled : buttonEnabled);
}

ButtonGeneric.defaultProps = {
  TestId: '',
  Type: 'button',
  Text: '',
  Class: '',
  Disabled: false,
};

ButtonGeneric.propTypes = {
  TestId: PropTypes.string,
  Type: PropTypes.string,
  Text: PropTypes.string,
  Class: PropTypes.string,
  Disabled: PropTypes.bool,
};

export default ButtonGeneric;
