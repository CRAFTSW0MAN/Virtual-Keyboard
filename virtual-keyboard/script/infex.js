import { creatingBubbles } from './components/section-bubbles.js';
import { creatingKeyboard } from './components/creating-keyboard.js';

const keyboard = creatingKeyboard();
const bubbles = creatingBubbles();

document.body.append(bubbles);
document.body.append(keyboard);

// let arr = [];

// document.onkeyup = function (e) {
//   let arr2 = {};
//   console.log(event);
//   arr2.key = event.key;
//   arr2.code = event.code;
//   arr2.keyCode = event.keyCode;
//   arr.push (arr2);
//   console.log(arr);
//   return arr;
// };
