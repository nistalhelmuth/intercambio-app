export const postBelonging = (
  name,
  description,
  category,
  state,
  belongsTo,
  token,
) => new Promise((resolve, reject) => {
  fetch('http://127.0.0.1:8000/api/v1/belongings/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
    body: JSON.stringify({
      name,
      description,
      category,
      state,
      belongsTo,
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

export const fetchBelongings = (
  belongsTo,
  token,
) => new Promise((resolve, reject) => {
  fetch(`http://127.0.0.1:8000/api/v1/belongings/from_user/?user=${belongsTo}`, {
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
  })
    .catch((error) => {
      reject(error);
    });
});

export const updateBelonging = (
  id,
  name,
  description,
  category,
  state,
  belongsTo,
  img,
  token,
) => new Promise((resolve, reject) => {
  fetch(`http://127.0.0.1:8000/api/v1/belongings/${id}/`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
    body: JSON.stringify({
      name,
      description,
      category,
      state,
      belongsTo,
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

export const deleteBelonging = id => fetch(`http://127.0.0.1:8000/api/v1/belongings/${id}/`, {
  method: 'DELETE',
}).then(resultado => resultado)
  .catch(/* error */);

export const getBelonginPerOffer = (offerId, token) => new Promise((resolve, reject) => {
  fetch(`http://127.0.0.1:8000/api/v1/belongings_per_offer/by_offer/?offer=${offerId}`, {
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
  }).catch(error => reject(error));
});

export const postBelongingInOffer = (
  belonging,
  offer,
  token,
) => new Promise((resolve, reject) => {
  fetch('http://127.0.0.1:8000/api/v1/belongings_per_offer/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
    body: JSON.stringify({
      belonging,
      offer,
    }),
  }).then((resultado) => {
    if (resultado.ok) {
      resolve(resultado.json());
    } else {
      reject(resultado.statusText);
    }
  }).catch(error => reject(error));
});
