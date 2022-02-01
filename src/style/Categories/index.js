import styled from 'styled-components';

const Scategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 190px;
  margin-bottom: 50px;
`;

const Scategory = styled.button`
  font-weight: 600;
  color: #3D3D3D;
  cursor: pointer;
  border: 2px solid #959595;
  border-radius: 10px;
  background: lightgray;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 10px;
  &:hover {
    transition: 1s;
    color: black;
    background: rgba(255,0,0,1);
    border: 2px solid rgba(255,0,0,1);
  }
`;

export {
  Scategories,
  Scategory,
};
