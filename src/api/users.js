export const postUser = (
  username,
  firstName,
  lastName,
  email,
  password,
  age,
  phone,
) => new Promise((resolve, reject) => {
  fetch('http://127.0.0.1:8000/api/v1/users/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      firstName,
      lastName,
      email,
      password,
      age,
      phone,
    }),
  }).then((resultado) => {
    if (resultado.ok) {
      resolve(resultado.json());
    } else {
      reject(resultado.statusText);
    }
  })
    .catch((error) => {
      reject(error);
    });
});

export const updateUser = (
  id,
  username,
  firstName,
  lastName,
  email,
  password,
  age,
  phone,
  rating,
  img,
) => new Promise((resolve, reject) => {
  fetch(`http://127.0.0.1:8000/api/v1/users/${id}/`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      age,
      phone,
      rating,
      img,
    }),
  }).then((resultado) => {
    if (resultado.ok) {
      resolve(resultado.json());
    } else {
      reject(resultado.statusText);
    }
  })
    .catch((error) => {
      reject(error);
    });
});

export const deleteUser = id => fetch(`http://127.0.0.1:8000/api/v1/users/${id}/`, {
  method: 'DELETE',
}).then(resultado => resultado)
  .catch(/* error */);

// esto no funciona
export const getUsers = (
  atributeName,
  comparisonObject,
) => fetch('http://127.0.0.1:8000/api/v1/users/', {
  method: 'GET',
}).then(resultado => resultado.json())
  .catch(error => console.log(error));

export const getUser = (
  userId,
  token,
) => new Promise((resolve, reject) => {
  fetch(`http://127.0.0.1:8000/api/v1/users/${userId}`, {
    method: 'GET',
    headers: {
      Authorization: `JWT ${token}`,
    },
  }).then((resultado) => {
    if (resultado.ok) {
      resolve(resultado.json());
    } else {
      reject(resultado.statusText);
    }
  }).catch(error => console.log(error));
});
