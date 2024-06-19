import React from 'react';

const Auth = () => {
  const clientId = '16cu_qc_SVa1lx5bEUQ1nH93i8-fsD-7';
  const redirectUri = 'http://localhost:3000/callback';
  const scopes = 'profile history';

  const handleAuth = () => {
    const authUrl = `https://login.uber.com/oauth/v2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
    window.location.href = authUrl;
  };

  return (
    <div>
      <button onClick={handleAuth}>Authenticate with Uber</button>
    </div>
  );
};

export default Auth;
