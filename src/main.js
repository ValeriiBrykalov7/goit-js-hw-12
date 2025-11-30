import getImagesByQuery from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  loadBtn,
} from './js/render-functions';

const formEl = document.querySelector('form');

const pageSize = 15;
let query;
let currentPage;
let totalPages;

formEl.addEventListener('submit', async e => {
  e.preventDefault();
  clearGallery();

  hideLoadMoreButton();

  query = e.target.elements.search.value.trim();
  currentPage = 1;
  totalPages = 0;

  if (!query) {
    iziToast.info({
      message: 'Please enter a query',
      position: 'topRight',
      color: 'yellow',
    });
    return;
  }
  showLoader();
  try {
    const res = await getImagesByQuery(query, currentPage);

    if (res.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        color: 'red',
        position: 'topRight',
      });
      return;
    } else {
      createGallery(res.hits);
      totalPages = Math.ceil(res.totalHits / pageSize);
      checkBtnStatus();
    }
  } catch (err) {
    iziToast.error({
      message: err.message,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});

loadBtn.addEventListener('click', async () => {
  if (currentPage >= totalPages) {
    hideLoadMoreButton();
    return;
  }
  currentPage += 1;
  showLoader();
  hideLoadMoreButton();
  try {
    const res = await getImagesByQuery(query, currentPage);
    createGallery(res.hits);
    checkBtnStatus();

    scroll();
  } catch (err) {
    iziToast.error({
      message: err.message,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});

function checkBtnStatus() {
  if (currentPage < totalPages) {
    showLoadMoreButton();
  } else {
    hideLoadMoreButton();
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'bottomRight',
    });
  }
}

function scroll() {
  const card = document.querySelector('.gallery-item');
  const cardHeigth = card.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeigth * 2,
    behavior: 'smooth',
  });
}
