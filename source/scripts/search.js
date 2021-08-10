const search = document.querySelector('.j-search');
const isEscKey = (e) => e.key === 'Escape' || e.key === 'Esc';

const onShowSearch = (e) => {
  e.preventDefault();
  search.classList.add('is-show');
  search.classList.remove('is-hide');
}

const onCloseSearch = (e) => {
  if (isEscKey(e) || e.type === 'click') {
    e.preventDefault();
    search.classList.remove('is-show');
    search.classList.add('is-hide');
  }
}

export { onShowSearch, onCloseSearch };
