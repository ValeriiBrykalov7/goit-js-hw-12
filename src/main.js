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
  showLoader();
  hideLoadMoreButton();
  clearGallery();

  query = e.target.elements.search.value;
  currentPage = 1;

  if (!query) {
    hideLoadMoreButton();
    iziToast.info({
      message: 'Please enter value',
      position: 'topRight',
      color: 'yellow',
    });
    hideLoader();
    return;
  }
  try {
    const res = await getImagesByQuery(query, currentPage);

    if (res.hits.length === 0) {
      hideLoadMoreButton();
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
      scroll();
    }
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }

  checkBtnStatus();

  e.target.reset();
});

loadBtn.addEventListener('click', async () => {
  hideLoadMoreButton();
  currentPage += 1;
  showLoader();
  try {
    const res = await getImagesByQuery(query, currentPage);
    createGallery(res.hits);
    checkBtnStatus();

    scroll();
  } catch (err) {
    console.log(err);
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
