'use strict';

const apiKey = '45020443-554fa7ec416e1f918b290a17c';
const url = `https://pixabay.com/api/`;

export function fetchPixabay(value) {
  const searchParams = new URLSearchParams({
    key: apiKey,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${url}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })

    .catch(error => console.log(error));
}
