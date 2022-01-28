import styled from 'styled-components';

const Sform = styled.form`
  box-shadow: 2px 2px 2px black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  max-heigth: 80vh;
  padding: 5px;
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
  max-width: 63vw;
  margin-top: 10px;
`;

export {
  Sform,
  Sinput,
  Sbutton,
};
