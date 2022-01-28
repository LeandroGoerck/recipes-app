import React from 'react';
import { Sform, Sinput, Sbutton } from '../../style/Login/index';

function Login() {
  return (
    <Sform>
      <Sinput
        id="input-email"
        type="text"
        data-testid="email-input"
        placeholder="Enter your email"
      />

      <Sinput
        id="input-password"
        type="password"
        data-testid="password-input"
        placeholder="Enter your password"
      />
      <Sbutton type="submit" data-testid="login-submit-btn">
        Enter
      </Sbutton>
    </Sform>
  );
}

export default Login;
