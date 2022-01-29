import styled from 'styled-components';

const SdivSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Sinput = styled.input`
  text-align: center;
  margin-bottom: 10px;
  margin-top: 5px;
  margin-right: 10px;
  width: 65%;
  height: 30px;
  font-size: 18px;
  border-radius: 40px;
  border: 2px solid black
`;

const SbuttonSearch = styled.button`
  color: black;
  font-size: 18px;
  font-weight: 600;
  padding-left: 15px;
  padding-right: 15px;
  border: 2px solid black;
  border-radius: 20px;
  margin-top: 5px;
  height: 35px;
  background: white;
    &:hover {
      transition: 1s;
      background: black;
      color: red;
      cursor: pointer;
    }
`;

const SradioFilter = styled.input`
    margin: 5px 0;
    width: 20px;
    height: 20px;
`;

const SlabelFilter = styled.label`
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 10px;
`;

export {
  Sinput,
  SbuttonSearch,
  SdivSearch,
  SradioFilter,
  SlabelFilter,
};
