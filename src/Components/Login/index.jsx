import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillEyeSlashFill } from 'react-icons/bs';
// import { IoEyeSharp } from 'react-icons/io';
import { Sform, Sinput, Sbutton } from '../../style/Login/index';
import '../../style/style.css';
import ImageCook from './image/cookLogin.svg';

function Login() {
  return (
    <>
      <img
        className="image-cook"
        src={ ImageCook }
        alt="CookImage"
      />
      <Sform>
        <Sinput
          id="input-email"
          type="text"
          data-testid="email-input"
          placeholder="Enter your email"
        />
        <AiOutlineUser className="icon-user" />

        <Sinput
          id="input-password"
          type="password"
          data-testid="password-input"
          placeholder="Enter your password"
        />
        <BsFillEyeSlashFill className="icon-password" />
        <Sbutton type="submit" data-testid="login-submit-btn">
          Enter
        </Sbutton>
      </Sform>
    </>
  );
}

export default Login;
