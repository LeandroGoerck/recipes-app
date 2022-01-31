import styled from 'styled-components';

const SdivExploreFoods = styled.div`
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SbuttonExplore = styled.button`
    color: black;
  font-size: 24px;
  font-weight: 600;
  padding: 40px 40px 40px 40px;
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
