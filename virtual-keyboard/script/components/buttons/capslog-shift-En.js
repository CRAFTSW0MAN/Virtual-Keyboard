function changeLanguageEn() {
  localStorage.setItem('Language', 'en');
}
function changeLanguageRu() {
  localStorage.setItem('Language', 'ru');
}

async function workJsonCapsLockShiftEn() {
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
  const key = document.querySelectorAll('.led-blue');
  const caps = document.querySelector('#CapsLock');
  const shiftLeft = document.querySelector('#ShiftLeft');
  const shiftRight = document.querySelector('#ShiftRight');
  if (shiftLeft.classList.contains('active') && !caps.classList.contains('active')) {
    key.forEach((param) => {
      data.forEach((element) => {
        if (param.id === element.code) {
          // метод `Object.assign()`, который копирует свойство `CapsLog` из объекта `element`
          // в свойство `innerHTML` объекта `param`
          Object.assign(param, { innerHTML: element.Shift });
        }
      });
    });
  } else if (shiftRight.classList.contains('active') && !caps.classList.contains('active')) {
    key.forEach((param) => {
      data.forEach((element) => {
        if (param.id === element.code) {
          Object.assign(param, { innerHTML: element.Shift });
        }
      });
    });
  } else if (shiftRight.classList.contains('active') && caps.classList.contains('active')) {
    key.forEach((param) => {
      data.forEach((element) => {
        if (param.id === element.code) {
          Object.assign(param, { innerHTML: element.CapsLogShift });
        }
      });
    });
  } else if (shiftLeft.classList.contains('active') && caps.classList.contains('active')) {
    key.forEach((param) => {
      data.forEach((element) => {
        if (param.id === element.code) {
          Object.assign(param, { innerHTML: element.CapsLogShift });
        }
      });
    });
  } else if (!shiftLeft.classList.contains('active') && caps.classList.contains('active')) {
    key.forEach((param) => {
      data.forEach((element) => {
        if (param.id === element.code) {
          Object.assign(param, { innerHTML: element.CapsLog });
        }
      });
    });
  } else if (!shiftRight.classList.contains('active') && caps.classList.contains('active')) {
    key.forEach((param) => {
      data.forEach((element) => {
        if (param.id === element.code) {
          Object.assign(param, { innerHTML: element.CapsLog });
        }
      });
    });
  } else {
    key.forEach((param) => {
      data.forEach((element) => {
        if (param.id === element.code) {
          Object.assign(param, { innerHTML: element.key });
        }
      });
    });
  }
}
export { workJsonCapsLockShiftEn };
