async function workJsonShift() {
  const keys = '../virtual-keyboard/script/json-file/key-EN.json';
  const res = await fetch(keys);
  const data = await res.json();
  const key = document.querySelectorAll('.led-blue');
  const shiftLeft = document.querySelector('#ShiftLeft');
  const shiftRight = document.querySelector('#ShiftRight');
  const caps = document.querySelector('#CapsLock');
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
          // метод `Object.assign()`, который копирует свойство `CapsLog` из объекта `element`
          // в свойство `innerHTML` объекта `param`
          Object.assign(param, { innerHTML: element.Shift });
        }
      });
    });
  } else if (shiftRight.classList.contains('active') && caps.classList.contains('active')) {
    key.forEach((param) => {
      data.forEach((element) => {
        if (param.id === element.code) {
          // метод `Object.assign()`, который копирует свойство `CapsLog` из объекта `element`
          // в свойство `innerHTML` объекта `param`
          Object.assign(param, { innerHTML: element.CapsLogShift });
        }
      });
    });
  } else if (shiftLeft.classList.contains('active') && caps.classList.contains('active')) {
    key.forEach((param) => {
      data.forEach((element) => {
        if (param.id === element.code) {
          // метод `Object.assign()`, который копирует свойство `CapsLog` из объекта `element`
          // в свойство `innerHTML` объекта `param`
          Object.assign(param, { innerHTML: element.CapsLogShift });
        }
      });
    });
  } else if (!shiftLeft.classList.contains('active') && caps.classList.contains('active')) {
    key.forEach((param) => {
      data.forEach((element) => {
        if (param.id === element.code) {
          // метод `Object.assign()`, который копирует свойство `CapsLog` из объекта `element`
          // в свойство `innerHTML` объекта `param`
          Object.assign(param, { innerHTML: element.CapsLog });
        }
      });
    });
  } else if (!shiftRight.classList.contains('active') && caps.classList.contains('active')) {
    key.forEach((param) => {
      data.forEach((element) => {
        if (param.id === element.code) {
          // метод `Object.assign()`, который копирует свойство `CapsLog` из объекта `element`
          // в свойство `innerHTML` объекта `param`
          Object.assign(param, { innerHTML: element.CapsLog });
        }
      });
    });
  } else {
    key.forEach((param) => {
      data.forEach((element) => {
        if (param.id === element.code) {
          // метод `Object.assign()`, который копирует свойство `CapsLog` из объекта `element`
          // в свойство `innerHTML` объекта `param`
          Object.assign(param, { innerHTML: element.key });
        }
      });
    });
  }
}
export { workJsonShift };
