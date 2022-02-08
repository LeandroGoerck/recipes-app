import React, { useContext, useEffect } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../style/style.css';
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

  const handleShare = (event) => {
    event.preventDefault();
    const { baseURI } = event.target;
    console.dir(event.target);
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
      {/* <CopyToClipboard
        text={ saveLink }
      > */}
      <button
        type="submit"
        data-testid="share-btn"
        className="share-btn"
        onClick={ handleShare }
      >
        <AiOutlineShareAlt />
      </button>
      {/* </CopyToClipboard> */}
    </>
  );
}

export default BtnShare;
