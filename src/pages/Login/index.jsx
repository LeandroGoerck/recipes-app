import React, { useContext } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillEyeSlashFill } from 'react-icons/bs';
// import { IoEyeSharp } from 'react-icons/io';
import { Sform, Sinput, Sbutton } from '../../style/Login/index';
import '../../style/style.css';
import ImageCook from './image/cookLogin.svg';
import globalContext from '../../Context/globalContext';

function Login() {
  const contextValue = useContext(globalContext);

  const handleChange = ({ target: { value, type } }) => {
    const { email, password, setEmail, setBtnLogin, setPassword } = contextValue;
    const minCharacter = 6;
    if (email.includes('@') && email.includes('.com')
      && password.length >= minCharacter) {
      setBtnLogin(false);
    }
    return type === 'password' ? setPassword(value) : setEmail(value);
  };

  return (
    <>
      <img className="image-cook" src={ ImageCook } alt="CookImage" />
      <Sform>
        <Sinput
          value={ contextValue.email }
          id="input-email"
          type="text"
          data-testid="email-input"
          placeholder="Enter your email"
          onChange={ handleChange }
        />
        <AiOutlineUser className="icon-user" />

        <Sinput
          value={ contextValue.password }
          id="input-password"
          type="password"
          data-testid="password-input"
          placeholder="Enter your password"
          onChange={ handleChange }
        />
        <BsFillEyeSlashFill className="icon-password" />
        <Sbutton
          disabled={ contextValue.btnLogin }
          type="submit"
          data-testid="login-submit-btn"
        >
          Enter
        </Sbutton>
      </Sform>
    </>
  );
}

export default Login;