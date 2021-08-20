import { onShowSearch, onCloseSearch } from './search.js';

const events = () => {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('j-show-search')) {
      onShowSearch(e);
    }

    if (e.target.classList.contains('j-close-search')) {
      onCloseSearch(e);
    }
  })

  document.addEventListener('keydown', (e) => {
    onCloseSearch(e);
  })
}

export { events };
