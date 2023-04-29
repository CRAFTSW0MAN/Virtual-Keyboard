import { creatingInfo } from './section-info.js';
import { buttonsRow } from './buttons/creating-button.js';

const CssClasses = {
  KEYBOARD: 'keyboard',
  TITLE: 'keyboard-title',
  VISUALIZATION: 'keyboard-visualization',
  BLOCK: 'keyboard-buttons',
};

const info = creatingInfo();

function creatingKeyboard() {
  const component = document.createElement('section');
  const title = document.createElement('h1');
  const textarea = document.createElement('textarea');
  const buttons = document.createElement('div');

  component.classList.add(CssClasses.KEYBOARD);
  title.classList.add(CssClasses.TITLE);
  title.innerHTML = 'RSS Virtual Keyboard';
  textarea.classList.add(CssClasses.VISUALIZATION);
  buttons.classList.add(CssClasses.BLOCK);

  buttons.append(buttonsRow);
  component.append(title);
  component.append(textarea);
  component.append(buttons);
  component.append(info);
  return component;
}
export { creatingKeyboard };
