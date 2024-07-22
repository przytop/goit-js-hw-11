'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchPixabay } from './fetch-pixabay';

const form = document.querySelector('.form');
const loading = document.querySelector(".loader");
const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function loadingStart() {
  loading.classList.remove('disabled');
}

function loadingEnd() {
  loading.classList.add('disabled');
}

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const searchValue = evt.target.search.value.trim();

  if (searchValue === "") {
    iziToast.warning({
      message: 'Complete the field correctly',
      position: 'topRight',
    });
    return;
  }

  gallery.innerHTML = '';
  loadingStart();
  fetchPixabay(searchValue).then(response => {
    if (response.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      loadingEnd();
      return;
    } 

    loadingEnd();
    gallery.innerHTML = response.hits
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
          return `
          <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <img class="gallery-image" src="${webformatURL}" alt="${tags}">
            </a>
            <ul class="image-info">
              <li>
                <h3 class="image-title">Likes</h3>
                <p class="image-stats">${likes}</p>
              </li>
              <li>
                <h3 class="image-title">Views</h3>
                <p class="image-stats">${views}</p>
              </li>
              <li>
                <h3 class="image-title">Comments</h3>
                <p class="image-stats">${comments}</p>
              </li>
              <li>
                <h3 class="image-title">Downloads</h3>
                <p class="image-stats">${downloads}</p>
              </li>
            </ul>
          </li>`})
      .join('');
      lightbox.refresh();
  });

  form.reset();
});
