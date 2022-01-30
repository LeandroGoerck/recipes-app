import styled from 'styled-components';

const SdivProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  font-size: x-large;
`;

const SbuttonProfile = styled.button`
  color: black;
  font-size: 18px;
  font-weight: 600;
  padding-left: 15px;
  padding-right: 15px;
  border: 2px solid black;
  border-radius: 20px;
  margin-top: 30px;
  height: 35px;
  background: lightgray;
    &:hover {
      transition: 1s;
      background: black;
      color: red;
      cursor: pointer;
    }
`;

const SbuttonLogout = styled.button`
  color: black;
  font-size: 18px;
  font-weight: 600;
  padding-left: 15px;
  padding-right: 15px;
  border: 2px solid black;
  border-radius: 20px;
  margin-top: 60%;
  height: 35px;
  background: red;
    &:hover {
      transition: 1s;
      background: black;
      color: red;
      cursor: pointer;
    }
`;

export {
  SdivProfile,
  SbuttonProfile,
  SbuttonLogout,
};
