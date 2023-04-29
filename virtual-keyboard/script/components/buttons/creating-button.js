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
  const keys = '../virtual-keyboard/script/json-file/key-EN.json';
  const res = await fetch(keys);
  const data = await res.json();

  data.forEach((element) => {
    const button = document.createElement('button');
    if (element.key === 'Backspace' || element.key === 'Delete' || element.key === 'Enter' || element.key === 'Alt' || element.key === 'Win' || element.key === 'Ctrl') {
      button.classList.add(CssClassesButtons.BUTTON2);
    } else if (element.key === '    ') {
      button.classList.add(CssClassesButtons.BUTTON3);
    } else if (element.key === 'Tab' || element.key === 'Caps Lock' || element.key === 'Shift') {
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
