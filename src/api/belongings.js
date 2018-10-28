export const postBelongin = (
  name,
  description,
  category,
  usedState,
  propietaryId,
) => fetch('http://127.0.0.1:8000/api/v1/belongins/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
    description,
    category,
    usedState,
    propietaryId,
  }),
}).then(resultado => resultado)
  .catch((/* error */) => {
    // Hacer Algo (QUE NO SEA IMPRIMIR EN CONSOLA);
  });

export const deleteBelongin = (
  id,
) => fetch('http://127.0.0.1:8000/api/v1/belongins/'+id+'/', {
  method: 'DELETE',
}).then(resultado => resultado)
  .catch(/* error */);

//esto no funciona
export const getBelongin = (
    id,
  ) => fetch('http://127.0.0.1:8000/api/v1/belongins/'+id+'/', {
    method: 'GET',
  }).then(resultado => resultado.json())
    .catch(error => console.log(error));
