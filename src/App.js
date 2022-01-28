import React from 'react';
import Routes from './routes/index';
import globalContext from './Context/globalContext';

function App() {
  const [email, setEmail] = React.useState('');
  const [btnLogin, setBtnLogin] = React.useState(true);
  const [password, setPassword] = React.useState('');

  const contextValue = {
    email,
    setEmail,
    btnLogin,
    setBtnLogin,
    password,
    setPassword,
  };

  return (
    <globalContext.Provider value={ contextValue }>
      <Routes />
    </globalContext.Provider>
  );
}

export default App;
