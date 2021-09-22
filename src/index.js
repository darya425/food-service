import cardsTpl from './template/cards.hbs';
import menuCards from './data/menu.json';
import './css/styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkbox = document.querySelector('#theme-switch-toggle');
const body = document.body;
const userTheme = localStorage.getItem('theme');
body.classList.add(Theme.LIGHT);

checkbox.addEventListener('change', onChangeTheme);

if (userTheme) {
  body.classList.add(userTheme);
}

if (userTheme === Theme.DARK) {
  checkbox.checked = true;
}

function onChangeTheme(evt) {
  body.classList.replace(Theme.LIGHT, Theme.DARK);

  if (!evt.currentTarget.checked) {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
  }

  const bgColor = body.classList;
  localStorage.setItem('theme', bgColor);
}

const listMenu = document.querySelector('.js-menu');
const cardsMarkup = createListMenu(menuCards);
listMenu.insertAdjacentHTML('beforeend', cardsMarkup);

function createListMenu(cards) {
  return cards.map(cardsTpl).join('');
}
