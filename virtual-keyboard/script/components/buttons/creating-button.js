import { changeLanguageEn, changeLanguageRu } from '../language/changeLanguageRu.js';

const CssClassesButtons = {
  ROW: 'buttons-row',
  BUTTON: 'button',
  BUTTON2: 'button2',
  BUTTON3: 'button3',
  BUTTON4: 'button4',
  COLLOR: 'led-blue',
};
const buttonsRow = document.createElement('div');
buttonsRow.classList.add(CssClassesButtons.ROW);

async function workJson() {
  const language = localStorage.getItem('Language');
  let keys;
  if (language === 'ru') {
    keys = '../virtual-keyboard/script/json-file/key-RU.json';
    changeLanguageRu();
  } else {
    keys = '../virtual-keyboard/script/json-file/key-EN.json';
    changeLanguageEn();
  }
  const res = await fetch(keys);
  const data = await res.json();

  data.forEach((element) => {
    const button = document.createElement('button');
    if (element.class === 'button2') {
      button.classList.add(CssClassesButtons.BUTTON2);
    } else if (element.class === 'button3') {
      button.classList.add(CssClassesButtons.BUTTON3);
    } else if (element.class === 'button4') {
      button.classList.add(CssClassesButtons.BUTTON4);
    } else {
      button.classList.add(CssClassesButtons.BUTTON);
    }
    button.classList.add(CssClassesButtons.COLLOR);
    button.id = element.code;
    button.innerHTML = `${element.key}`;
    buttonsRow.append(button);
  });
}

workJson();
export { buttonsRow };
