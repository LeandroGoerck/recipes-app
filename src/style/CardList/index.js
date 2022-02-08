import styled from 'styled-components';

const Simg = styled.img`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  cursor: pointer;
  inset: 0;
  margin-bottom: 15px;
  width: 100%;
  aspect-ratio: 1 / 1;
`;

const Stitle = styled.span`
  font-size: 22;
  font-weight: 600;
  margin-bottom: 15px;
  color: #3D3D3D;
  width: 100%;
  text-align: center;
  &:hover {
    color: black;
  }
`;

const Scard = styled.div`
  inset: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  border: 3px solid lightgray;
  border-radius: 15px;
  background: lightgray;
  width: 100%;
  &:hover {
    transition: 0.5s;
    box-shadow: 0px 15px 25px -4px #959595;
  }
`;

const ScardList = styled.div`
padding-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export {
  Simg,
  Scard,
  Stitle,
  ScardList,
};
