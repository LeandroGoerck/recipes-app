import React, { useContext, useEffect } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../style/style.css';
import copy from 'clipboard-copy';
import GlobalContext from '../../Context/GlobalContext';

function BtnShare() {
  const { shareLink } = useContext(GlobalContext);
  const { saveLink, setSaveLink } = shareLink;

  useEffect(() => {
    localStorage.setItem('link', saveLink);
  }, [saveLink]);

  const notify = () => {
    toast.success('Link copied!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleCopyText = () => {
    const myURL = window.location.href.split('/in-progress')[0];
    return myURL;
  };

  const handleShare = (event) => {
    event.preventDefault();
    const { baseURI } = event.target;
    copy(handleCopyText());
    setSaveLink(baseURI);
    notify();
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
        <AiOutlineShareAlt size={ 35 } />
      </button>
    </>
  );
}

export default BtnShare;
