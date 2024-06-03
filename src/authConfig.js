export const msalConfig = {
    auth: {
      clientId: 'd8fb83af-3ebe-4523-81e9-ca6310404ed8',
      authority: 'https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a',
      redirectUri: 'http://localhost:3000',
    },
  };
  
  export const loginRequest = {
    scopes: ['User.Read'],
  };