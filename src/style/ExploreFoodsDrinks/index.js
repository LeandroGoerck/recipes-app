import styled from 'styled-components';

const SdivExploreFoods = styled.div`
  align-items: center;
  margin-top: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SbuttonExplore = styled.button`
  color: black;
  font-size: 24px;
  font-weight: 600;
  padding: 15px;
  width: 65%;
  border: 2px solid black;
  border-radius: 20px;
  margin-top: 30px;
  margin-left: 15px;
  margin-right: 15px;
  background: lightgray;
    &:hover {
      transition: 1s;
      background: gray;
      color: black;
      cursor: pointer;
    }
`;

export {
  SdivExploreFoods,
  SbuttonExplore,
};
