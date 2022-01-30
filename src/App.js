import React from 'react';
import Routes from './routes/index';
import GlobalProvider from './Context/GlobalProvider';

function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}

export default App;
