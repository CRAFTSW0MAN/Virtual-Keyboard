import { creatingBubbles } from './components/section-bubbles.js';
import { creatingKeyboard } from './components/creating-keyboard.js';
import { workJsonCapsLockShiftEn } from './components/buttons/capslog-shift-En.js';
import { changeLanguageEn, changeLanguageRu } from './components/language/changeLanguageRu.js';

const keyboard = creatingKeyboard();
const bubbles = creatingBubbles();

document.body.append(bubbles);
document.body.append(keyboard);

const CssClassesKey = {
  TEXTAREA: '.keyboard-visualization',
  BUTTON: 'button',
  BUTTON2: 'button2',
  BUTTON4: 'button4',
  BUTTON3: 'button3',
  ACTIVE: 'active',
  COLLOR: '.led-blue',
};

const textareaBlock = document.querySelector(CssClassesKey.TEXTAREA);

document.onkeydown = function keyStrokeDown(event) {
  const keysBlock = document.querySelectorAll(CssClassesKey.COLLOR);
  const ctrlLeft = document.querySelector('#ControlLeft');
  const ctrlRight = document.querySelector('#ControlRight');
  const altLeft = document.querySelector('#AltLeft');
  const altRight = document.querySelector('#AltRight');
  event.preventDefault();
  const language = localStorage.getItem('Language');
  const start = textareaBlock.selectionStart;
  const end = textareaBlock.selectionEnd;

  keysBlock.forEach((element) => {
    if (element.id === event.code && element.classList.contains(CssClassesKey.BUTTON)) {
      textareaBlock.value += element.innerHTML;
      element.classList.add(CssClassesKey.ACTIVE);
    } else if (element.id === event.code && element.classList.contains(CssClassesKey.BUTTON2)) {
      element.classList.add(CssClassesKey.ACTIVE);
      if (element.id === event.code && element.id === 'Enter') {
        textareaBlock.value += '\n';
      } else if (element.id === event.code && element.id === 'ControlLeft') {
        if (altLeft.classList.contains('active') || altRight.classList.contains('active')) {
          if (language === 'ru') {
            element.classList.add(CssClassesKey.ACTIVE);
            changeLanguageEn();
          } else {
            element.classList.add(CssClassesKey.ACTIVE);
            changeLanguageRu();
          }
        }
      } else if (element.id === event.code && element.id === 'ControlRight') {
        if (altLeft.classList.contains('active') || altRight.classList.contains('active')) {
          if (language === 'ru') {
            element.classList.add(CssClassesKey.ACTIVE);
            changeLanguageEn();
          } else {
            element.classList.add(CssClassesKey.ACTIVE);
            changeLanguageRu();
          }
        }
      } else if (element.id === event.code && element.id === 'AltLeft') {
        if (ctrlLeft.classList.contains('active') || ctrlRight.classList.contains('active')) {
          if (language === 'ru') {
            element.classList.add(CssClassesKey.ACTIVE);
            changeLanguageEn();
          } else {
            element.classList.add(CssClassesKey.ACTIVE);
            changeLanguageRu();
          }
        }
      } else if (element.id === event.code && element.id === 'AltRight') {
        if (ctrlLeft.classList.contains('active') || ctrlRight.classList.contains('active')) {
          if (language === 'ru') {
            element.classList.add(CssClassesKey.ACTIVE);
            changeLanguageEn();
          } else {
            element.classList.add(CssClassesKey.ACTIVE);
            changeLanguageRu();
          }
        }
      } else if (element.id === event.code && element.id === 'Backspace') {
        if (start !== 0 && start === end) {
          textareaBlock.value = (textareaBlock.value.substring(0, start - 1)
                              + textareaBlock.value.substring(start));
          textareaBlock.setSelectionRange(start - 1, start - 1);
        } else {
          textareaBlock.value = (textareaBlock.value.substring(0, start)
                              + textareaBlock.value.substring(end));
          textareaBlock.setSelectionRange(start, start);
        }
      } else if (element.id === event.code && element.id === 'Delete') {
        textareaBlock.value = (textareaBlock.value.substring(0, start)
                              + textareaBlock.value.substring(start + 1));
        textareaBlock.setSelectionRange(start, start);
      }
    } else if (element.id === event.code && element.classList.contains(CssClassesKey.BUTTON3)) {
      element.classList.add(CssClassesKey.ACTIVE);
      textareaBlock.value += ' ';
    } else if (element.id === event.code && element.classList.contains(CssClassesKey.BUTTON4)) {
      if (element.id === event.code && element.id === 'CapsLock') {
        element.classList.toggle(CssClassesKey.ACTIVE);
        workJsonCapsLockShiftEn();
      } else if (element.id === event.code && element.id === 'ShiftLeft') {
        element.classList.add(CssClassesKey.ACTIVE);
        workJsonCapsLockShiftEn();
      } else if (element.id === event.code && element.id === 'ShiftRight') {
        element.classList.add(CssClassesKey.ACTIVE);
        workJsonCapsLockShiftEn();
      } else if (element.id === event.code && element.id === 'Tab') {
        element.classList.add(CssClassesKey.ACTIVE);
        textareaBlock.value += '\t';
      }
    }
    textareaBlock.blur(); textareaBlock.focus();
  });
};

document.onkeyup = function keyStrokeUp(event) {
  document.querySelectorAll(CssClassesKey.COLLOR).forEach((element) => {
    if (element.id === event.code && element.id !== 'CapsLock') {
      workJsonCapsLockShiftEn();
      element.classList.remove(CssClassesKey.ACTIVE);
    }
  });
};

function keyStrokeMauseDown(event) {
  const start = textareaBlock.selectionStart;
  const end = textareaBlock.selectionEnd;
  if (event.target.classList.contains('led-blue')) {
    if (event.target.id === 'CapsLock') {
      event.target.classList.toggle(CssClassesKey.ACTIVE);
      workJsonCapsLockShiftEn();
    } else if (event.target.id === 'ShiftLeft' || event.target.id === 'ShiftRight') {
      event.target.classList.add(CssClassesKey.ACTIVE);
      workJsonCapsLockShiftEn();
    } else if (event.target.id === 'Enter') {
      textareaBlock.value += '\n';
      event.target.classList.add(CssClassesKey.ACTIVE);
    } else if (event.target.id === 'Space') {
      textareaBlock.value += ' ';
      event.target.classList.add(CssClassesKey.ACTIVE);
    } else if (event.target.id === 'Tab') {
      textareaBlock.value += '\t';
      event.target.classList.add(CssClassesKey.ACTIVE);
    } else if (event.target.id === 'Win' || event.target.id === 'AltRight' || event.target.id === 'AltLeft') {
      event.target.classList.add(CssClassesKey.ACTIVE);
    } else if (event.target.id === 'ControlRight' || event.target.id === 'ControlLeft') {
      event.target.classList.add(CssClassesKey.ACTIVE);
    } else if (event.target.id === 'Backspace') {
      event.target.classList.add(CssClassesKey.ACTIVE);
      if (start === end) {
        textareaBlock.value = (textareaBlock.value.substring(0, start - 1)
                              + textareaBlock.value.substring(start));
        textareaBlock.setSelectionRange(start - 1, start - 1);
      } else {
        textareaBlock.value = (textareaBlock.value.substring(0, start)
                              + textareaBlock.value.substring(end));
        textareaBlock.setSelectionRange(start, start);
      }
    } else if (event.target.id === 'Delete') {
      event.target.classList.add(CssClassesKey.ACTIVE);
      textareaBlock.value = (textareaBlock.value.substring(0, start)
                            + textareaBlock.value.substring(start + 1));
      textareaBlock.setSelectionRange(start, start);
    } else {
      event.target.classList.add(CssClassesKey.ACTIVE);
      textareaBlock.value += event.target.innerHTML;
    }
  }
  textareaBlock.blur(); textareaBlock.focus();
}

keyboard.addEventListener('mousedown', keyStrokeMauseDown);

function keyStrokeMauseUp(event) {
  if (event.target.classList.contains('led-blue') && event.target.id !== 'CapsLock') {
    event.target.classList.remove(CssClassesKey.ACTIVE);
    workJsonCapsLockShiftEn();
  }
}

keyboard.addEventListener('mouseup', keyStrokeMauseUp);
keyboard.addEventListener('mouseout', keyStrokeMauseUp);
