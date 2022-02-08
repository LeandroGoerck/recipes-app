import React, { useContext } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
// import { BsFillEyeSlashFill } from 'react-icons/bs';
// import { IoEyeSharp } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { Sform, Sinput, Sbutton } from '../../style/Login/index';
import '../../style/style.css';
import ImageCook from './image/cookLogin.svg';
import GlobalContext from '../../Context/GlobalContext';

function Login() {
  const { login, favorite: { favList } } = useContext(GlobalContext);
  const history = useHistory();

  const handleChange = ({ target: { value, type } }) => {
    const { email, password, setEmail, setBtnLogin, setPassword } = login;
    const minCharacter = 6;

    if (email.includes('@') && email.includes('.com')
      && password.length >= minCharacter) {
      setBtnLogin(false);
    }
    return type === 'password' ? setPassword(value) : setEmail(value);
  };

  const handleSubmit = (event) => {
    const { email } = login;
    event.preventDefault();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('link', JSON.stringify(undefined));
    localStorage.setItem('favoriteRecipes', JSON.stringify(favList));
    localStorage.setItem('startRecipes', JSON.stringify([]));
    history.push('/foods');
  };

  return (
    <div className="container-login">
      <img className="image-cook" src={ ImageCook } alt="CookImage" />
      <Sform>
        <Sinput
          value={ login.email }
          id="input-email"
          type="text"
          data-testid="email-input"
          placeholder="Enter your email"
          onChange={ handleChange }
        />
        <AiOutlineUser className="icon-user" />

        <Sinput
          value={ login.password }
          id="input-password"
          type="password"
          data-testid="password-input"
          placeholder="Enter your password"
          onChange={ handleChange }
        />
        {/* <BsFillEyeSlashFill className="icon-password" /> */}
        <Sbutton
          disabled={ login.btnLogin }
          type="submit"
          data-testid="login-submit-btn"
          onClick={ (ev) => handleSubmit(ev) }
        >
          Enter
        </Sbutton>
      </Sform>
    </div>
  );
}

export default Login;
