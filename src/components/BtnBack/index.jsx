import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import BackButton from '../../style/ButtonBack/style';

function ButtonBack() {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <BackButton
      type="button"
      onClick={ handleBack }
    >
      <IoChevronBack style={ { fontSize: '35px' } } />
    </BackButton>
  );
}

export default ButtonBack;
