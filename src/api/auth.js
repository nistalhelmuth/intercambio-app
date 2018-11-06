const login = (username, password) => fetch('http://127.0.0.1:8000/api/v1/token-auth/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username,
    password,
  }),
}).then(response => response.json());

export default login;
