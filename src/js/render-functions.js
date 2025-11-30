import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const ulEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
export const loadBtn = document.querySelector('.load-button');

export function createGallery(images) {
  const markup = images
    .map(
      item =>
        `<li class="gallery-item">
    <a href="${item.largeImageURL}" class="gallery-link"><img src="${item.webformatURL}" alt="${item.tags}" class="card-image"></a>
    
      <ul class="stats">
        <li class="stat">
          <span class="stat-label">Likes</span>
          <span class="stat-value">${item.likes}</span>
        </li>
        <li class="stat">
          <span class="stat-label">Views</span>
          <span class="stat-value">${item.views}</span>
        </li>
        <li class="stat">
          <span class="stat-label">Comments</span>
          <span class="stat-value">${item.comments}</span>
        </li>
        <li class="stat">
          <span class="stat-label">Downloads</span>
          <span class="stat-value">${item.downloads}</span>
        </li>
      </ul>
</li>`
    )
    .join('');
  ulEl.insertAdjacentHTML('beforeend', markup);

  gallery.refresh();
}

export function clearGallery() {
  ulEl.textContent = '';
}
export function showLoader() {
  loader.classList.remove('hidden');
}
export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadBtn.classList.add('hidden');
}
