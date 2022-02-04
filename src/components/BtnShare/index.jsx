import React, { useState } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../style/style.css';

function BtnShare() {
  const [saveLink, setSaveLink] = useState('');

  const notify = () => {
    toast.success('Link copied to clipboard!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleShare = ({ target }) => {
    const { baseURI } = target;
    if (baseURI) {
      localStorage.setItem('link', saveLink);
      setSaveLink(baseURI);
      notify();
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={ 2000 }
        hideProgressBar={ false }
        newestOnTop={ false }
        closeOnClick
        rtl={ false }
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <button
        type="button"
        data-testid="share-btn"
        className="share-btn"
        onClick={ handleShare }
      >
        <AiOutlineShareAlt />
      </button>
    </>
  );
}

export default BtnShare;
