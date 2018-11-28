export const fetchPosts = (categoryId, token) => new Promise((resolve, reject) => {
  fetch(`http://127.0.0.1:8000/api/v1/posts/by_category/?category=${categoryId}`, {
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


export const createPost = (
  title,
  description,
  img,
  postedBy,
  offeredItem,
  category,
  token,
) => new Promise((resolve, reject) => {
  fetch('http://127.0.0.1:8000/api/v1/posts/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
    body: JSON.stringify({
      title,
      description,
      img,
      postedBy,
      offeredItem,
      category,
    }),
  }).then((resultado) => {
    if (resultado.ok) {
      resolve(resultado.json());
    } else {
      reject(resultado.statusText);
    }
  }).catch(error => reject(error));
});


export const fetchPost = (postId, token) => new Promise((resolve, reject) => {
  fetch(`http://127.0.0.1:8000/api/v1/posts/${postId}`, {
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
