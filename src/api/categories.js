
export const postCategory = (
  name,
) => fetch('http://127.0.0.1:8000/api/v1/categories/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
  }),
}).then(resultado => resultado)
  .catch((/* error */) => {
    // Hacer Algo (QUE NO SEA IMPRIMIR EN CONSOLA);
  });

export const getCategories = (
  ) => fetch('http://127.0.0.1:8000/api/v1/categories/', {
    method: 'GET',
  }).then(resultado => resultado.json())
    .catch(error => console.log(error));
