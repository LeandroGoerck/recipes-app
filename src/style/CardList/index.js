import styled from 'styled-components';

const Simg = styled.img`
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 120px;
  width: 150px;
`;

const SspanCard = styled.span`
  text-decoration: none;
  color: black;
`;

const SdivCard = styled.div`
  align-items: center;
  border: 2px solid #F0F0EB;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-bottom: 15px;
  &:hover {
    box-shadow: 0px 0px 50px 0px #A9B1A1;
  }
`;

export {
  Simg,
  SdivCard,
  SspanCard,
};
