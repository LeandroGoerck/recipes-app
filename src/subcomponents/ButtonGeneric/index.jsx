import React from 'react';
import PropTypes from 'prop-types';

function ButtonGeneric({ TestId, Type, Class, Disabled, ClickEvent, children }) {
  const buttonDisabled = (
    <button
      id={ TestId }
      data-testid={ TestId }
      type={ Type !== 'button' ? 'submit' : 'button' }
      className={ Class }
      disabled
    >
      {children}
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
      {children}
    </button>
  );

  return (Disabled ? buttonDisabled : buttonEnabled);
}

ButtonGeneric.defaultProps = {
  TestId: '',
  Type: 'button',
  Class: '',
  Disabled: false,
};

ButtonGeneric.propTypes = {
  TestId: PropTypes.string,
  Type: PropTypes.string,
  Class: PropTypes.string,
  Disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ButtonGeneric;
