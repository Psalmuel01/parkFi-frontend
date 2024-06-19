// src/Callback.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const clientId = '16cu_qc_SVa1lx5bEUQ1nH93i8-fsD-7';
  const clientSecret = 'fJfSRinEWhOcmDru995E08JB5vnH5Ali1ZefLVGP';
  const redirectUri = 'http://localhost:3000/callback'; // Replace with your actual redirect URI
  const history = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get('code');

    const fetchAccessToken = async () => {
      try {
        const response = await axios.post('https://login.uber.com/oauth/v2/token', null, {
          params: {
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'authorization_code',
            redirect_uri: redirectUri,
            code: authorizationCode
          }
        });

        const accessToken = response.data.access_token;
        localStorage.setItem('uberAccessToken', accessToken);
        console.log('Access token:', accessToken);
        history.push('/'); // Redirect back to the main page
      } catch (error) {
        console.error('Error exchanging authorization code:', error);
      }
    };

    if (authorizationCode) {
      fetchAccessToken();
    }
  }, [clientId, clientSecret, redirectUri, history]);

  return <div>Loading...</div>;
};

export default Callback;
