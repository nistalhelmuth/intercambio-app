export const fetchOffers = (postId, token) => new Promise((resolve, reject) => {
  fetch(`http://127.0.0.1:8000/api/v1/offers/by_post/?post=${postId}`, {
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


export const postOffer = (
  object,
  userId,
  objectId,
  token,
) => new Promise((resolve, reject) => {
  fetch('http://127.0.0.1:8000/api/v1/offers/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
    body: JSON.stringify({
      offered_object: object,
      offered_by: userId,
      offered_in: objectId,
      token,
    }),
  }).then((resultado) => {
    if (resultado.ok) {
      resolve(resultado.json());
    } else {
      reject(resultado.statusText);
    }
  }).catch(error => reject(error));
});

export const deleteOffer = (offerId, token) => new Promise((resolve, reject) => {
  fetch(`http://127.0.0.1:8000/api/v1/offers/${offerId}`, {
    method: 'DELETE',
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