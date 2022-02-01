import styled from 'styled-components';

const SdivCategories = styled.div`
  margin: 0;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  border: 2px solid grey;
  border-radius: 20px;
`;

const SbuttonCategories = styled.button`
  color: #58555A;
  padding: 8px;
  border: 2px solid grey;
  border-radius: 15px;
  cursor: pointer;
  margin: 10px 10px;
  &:hover {
    transition: 0.5s;
    color: black;
    border: 2px solid black;
  }
`;

export {
  SdivCategories,
  SbuttonCategories,
};
