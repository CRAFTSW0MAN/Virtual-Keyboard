import { creatingBubbles } from './components/section-bubbles.js';
import { creatingKeyboard } from './components/creating-keyboard.js';
import { workJsonCapsLockShiftEn } from './components/buttons/capslog-shift-En.js';
import { workJsonCapsLockShiftRu } from './components/buttons/capslog-shift-Ru.js';

const keyboard = creatingKeyboard();
const bubbles = creatingBubbles();

// let capsFlag = false;

document.body.append(bubbles);
document.body.append(keyboard);

const CssClassesKeyStroke = {
  TEXTAREA: '.keyboard-visualization',
  BUTTON: 'button',
  // BUTTON2: 'button2',
  // BUTTON3: 'button3',
  ACTIVE: 'active',
  COLLOR: '.led-blue',
};

const textareaBlock = document.querySelector(CssClassesKeyStroke.TEXTAREA);

document.onkeydown = function keyStrokeDown(event) {
  const keysBlock = document.querySelectorAll(CssClassesKeyStroke.COLLOR);

  keysBlock.forEach((element) => {
    if (element.id === event.code && element.classList.contains(CssClassesKeyStroke.BUTTON)) {
      event.preventDefault();
      textareaBlock.value += element.innerHTML;
      element.classList.add(CssClassesKeyStroke.ACTIVE);
    } else if (element.id === event.code && element.id === 'CapsLock') {
      element.classList.toggle(CssClassesKeyStroke.ACTIVE);
      workJsonCapsLockShiftEn();
    } else if (element.id === event.code && element.id === 'ShiftLeft') {
      element.classList.add(CssClassesKeyStroke.ACTIVE);
      workJsonCapsLockShiftEn();
    } else if (element.id === event.code && element.id === 'ShiftRight') {
      element.classList.add(CssClassesKeyStroke.ACTIVE);
      workJsonCapsLockShiftEn();
    }
  });
};

document.onkeyup = function keyStrokeUp(event) {
  document.querySelectorAll(CssClassesKeyStroke.COLLOR).forEach((element) => {
    if (element.id === event.code && element.id !== 'CapsLock') {
      workJsonCapsLockShiftEn();
      element.classList.remove(CssClassesKeyStroke.ACTIVE);
    }
  });
};

function keyStrokeMauseDown(event) {
  if (event.target.classList.contains('led-blue')) {
    if (event.target.id === 'CapsLock') {
      // capsFlag = false;
      event.target.classList.toggle(CssClassesKeyStroke.ACTIVE);
      workJsonCapsLockShiftEn();
    } else if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
      event.target.classList.add(CssClassesKeyStroke.ACTIVE);
      workJsonCapsLockShiftEn();
    } else {
      event.target.classList.add(CssClassesKeyStroke.ACTIVE);
      event.preventDefault();
      textareaBlock.value += event.target.innerHTML;
    }
  }
}

keyboard.addEventListener('mousedown', keyStrokeMauseDown);

function keyStrokeMauseUp(event) {
  if (event.target.classList.contains('led-blue') && event.target.id !== 'CapsLock') {
    if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
      event.target.classList.remove(CssClassesKeyStroke.ACTIVE);
      workJsonCapsLockShiftEn();
    } else {
      event.target.classList.remove(CssClassesKeyStroke.ACTIVE);
    }
  }
}

keyboard.addEventListener('mouseup', keyStrokeMauseUp);
