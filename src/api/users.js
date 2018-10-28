export const postUser = (
  username,
  firstName,
  lastName,
  email,
  password,
  age,
  phone,
) => fetch('http://127.0.0.1:8000/api/v1/users/', {
  method: 'POST',
  headers: {
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
  }),
}).then(resultado => resultado)
  .catch((/* error */) => {
    // Hacer Algo (QUE NO SEA IMPRIMIR EN CONSOLA);
  });

export const deleteUser = (
  id,
) => fetch('http://127.0.0.1:8000/api/v1/users/'+id+'/', {
  method: 'DELETE',
}).then(resultado => resultado)
  .catch(/* error */);

  //esto no funciona
export const checkUser = (
  email,
  password,
) => fetch('http://127.0.0.1:8000/api/v1/users/', {
  method: 'GET',
}).then(resultado => resultado.json())
  .then(resultadoJSON => resultadoJSON)
  .catch(error => console.log(error));

//esto no funciona
export const getUsers = (
    atributeName,
    comparisonObject,
  ) => fetch('http://127.0.0.1:8000/api/v1/users/', {
    method: 'GET',
  }).then(resultado => resultado.json())
    .catch(error => console.log(error));
