import React from 'react';
import PropTypes from 'prop-types';
import { SbuttonSearch } from '../../style/SearchBar';

function ButtonSearch({ TestId, Type, Text, Class, Disabled, ClickEvent }) {
  const buttonDisabled = (
    <SbuttonSearch
      id={ TestId }
      data-testid={ TestId }
      type={ Type !== 'button' ? 'submit' : 'button' }
      className={ Class }
      disabled
    >
      {Text}
    </SbuttonSearch>
  );

  const buttonEnabled = (
    <SbuttonSearch
      id={ TestId }
      data-testid={ TestId }
      type={ Type !== 'button' ? 'submit' : 'button' }
      className={ Class }
      onClick={ ClickEvent }
    >
      {Text}
    </SbuttonSearch>
  );

  return (Disabled ? buttonDisabled : buttonEnabled);
}

ButtonSearch.defaultProps = {
  TestId: '',
  Type: 'button',
  Text: '',
  Class: '',
  Disabled: false,
};

ButtonSearch.propTypes = {
  TestId: PropTypes.string,
  Type: PropTypes.string,
  Text: PropTypes.string,
  Class: PropTypes.string,
  Disabled: PropTypes.bool,
};

export default ButtonSearch;
