import styled from 'styled-components';

const Sform = styled.form`
  box-shadow: 1px 1px 5px 1px gray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  heigth: 10vh;
  padding: 40px;
  position: relative;
`;

const Sinput = styled.input`
  border: none;
  border-bottom: 2px solid gray;
  padding: 5px;
  max-width: 60vw;
  user-select: none;
  outline: none;
`;

const Sbutton = styled.button`
  min-width: 10vw;
  margin-top: 10px;
  text-transform: uppercase;
  border-radius: 5px;
`;

export {
  Sform,
  Sinput,
  Sbutton,
};
