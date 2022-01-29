import styled from 'styled-components';

const Sheader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  left: 0;
  justify-content: space-around;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-bottom: 5px solid rgba(196,0,0,1);
  background: linear-gradient(180deg,rgba(255,0,0,1) 0%,
   rgba(196,0,0,1) 100%, rgba(255,0,0,1) 100%);
  div {
    display: flex;
    flex-direction: row;
  }
`;

const SbuttonSearch = styled.button`
border: none;
background: linear-gradient(180deg,rgba(255,0,0,1) 0%,
rgba(196,0,0,1) 100%, rgba(255,0,0,1) 100%);
cursor: pointer;
background: rgba(255, 0, 0, 0);
`;
const Sdiv = styled.div`
   display: flex;
   justify-content: space-around;
   border-top: 2px solid black;
`;
const SinvDiv = styled.div`
  height: 47px;
  width: 47px;
`;
const Sinput = styled.input`
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  width: 80%;
  height: 35px;
  font-size: 20px;
  border-radius: 40px;
  border: 2px solid black
`;
const Simg = styled.img`
  cursor: pointer;
  margin-top: 5px;
  height: 35px;
  width: 35px;
`;

const SdivBarSearch = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Stitle = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export {
  Sheader,
  Sdiv,
  SinvDiv,
  Sinput,
  Simg,
  SbuttonSearch,
  SdivBarSearch,
  Stitle,
};
