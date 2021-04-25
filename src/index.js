import cardsTmp from './cards.hbs';
import menuCards from './menu.json';
import './styles.css';

// создание разметки
const listMenu = document.querySelector('.js-menu');
const cardsMarkup = createListMenu(menuCards);
listMenu.insertAdjacentHTML('beforeend', cardsMarkup);

function createListMenu(cards) {
    return cards.map(cardsTmp).join('');
}

// кнопка
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkbox = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
body.classList.add(Theme.LIGHT);

checkbox.addEventListener('change', onChangeTheme);

selectedTheme();
valueCheckbox();

function onChangeTheme(evt) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    checkbox.setAttribute('checked', '');

    if (!evt.currentTarget.checked) {
        body.classList.replace(Theme.DARK, Theme.LIGHT);
        checkbox.removeAttribute('checked');
    }

    const bgColor = body.classList;
    localStorage.setItem('bg-color', bgColor);
    const checked = checkbox.checked;
    localStorage.setItem('checked', checked);
}

function selectedTheme() {
    const savedTheme = localStorage.getItem('bg-color');
    
    if (savedTheme) {
        body.classList = savedTheme; 
    }  
}

function valueCheckbox() {
    const savedValue = localStorage.getItem('checked');
    const parsedValue = JSON.parse(savedValue);

    if (parsedValue) {
        checkbox.checked = parsedValue;
   }
}