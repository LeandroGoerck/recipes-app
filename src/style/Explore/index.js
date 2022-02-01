import styled from 'styled-components';

const SdivExplore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  font-size: x-large;
`;

const SbuttonExplore = styled.button`
    color: black;
  font-size: 24px;
  font-weight: 600;
  padding: 60px 60px 60px 60px;
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
