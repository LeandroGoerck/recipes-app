import styled from 'styled-components';

const SdivExplore = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  font-size: x-large;
  width: 65%;
  margin: 80px auto;
`;

const SbuttonExplore = styled.button`
  display: flex;
  align-items: center;
  color: black;
  font-size: 24px;
  font-weight: 600;
  padding: 25px 25px 25px 25px;
  border: 2px solid black;
  border-radius: 20px;
  margin-top: 30px;
  background: lightgray;
    &:hover {
      transition: 1s;
      background: gray;
      color: black;
      cursor: pointer;
    }
`;

export {
  SbuttonExplore,
  SdivExplore,
};
