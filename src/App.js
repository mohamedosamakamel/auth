// src/App.js
import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';

function App() {
  const { instance, accounts } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch(e => {
      console.error(e);
    });
  };

  const handleLogout = () => {
    instance.logoutPopup().catch(e => {
      console.error(e);
    });
  };

  return (
    <div>
      {accounts.length > 0 ? (
        <div>
          <h1>Welcome, {accounts[0].name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login with Outlook</button>
      )}
    </div>
  );
}

export default App;
