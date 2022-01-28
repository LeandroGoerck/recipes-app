import React, { useState } from 'react';
import Routes from './routes/index';
import globalContext from './Context/globalContext';

function App() {
  // =================== Login ======================
  const [email, setEmail] = React.useState('');
  const [btnLogin, setBtnLogin] = React.useState(true);
  const [password, setPassword] = React.useState('');
  // =================== SearchBar ==================
  const [displayInputSearch, setDisplayInputSearch] = useState(false);

  const contextValue = {
    login: {
      email,
      setEmail,
      btnLogin,
      setBtnLogin,
      password,
      setPassword,
    },
    searchBar: {
      displayInputSearch,
      setDisplayInputSearch,
    },
  };

  return (
    <globalContext.Provider value={ contextValue }>
      <Routes />
    </globalContext.Provider>
  );
}

export default App;
