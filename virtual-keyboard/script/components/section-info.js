const CssClassesInfo = {
  INFO: 'keyboard-info',
  TITLE1: 'info-language-change',
  TITLE2: 'info-system',
};
function creatingInfo() {
  const component = document.createElement('section');
  const titleLanguageChange = document.createElement('h2');
  const titleSistem = document.createElement('h2');

  component.classList.add(CssClassesInfo.INFO);
  titleLanguageChange.classList.add(CssClassesInfo.TITLE1);
  titleSistem.classList.add(CssClassesInfo.TITLE2);

  titleLanguageChange.innerHTML = 'Language switch combination: Ctrl + Alt';
  titleSistem.innerHTML = 'The keyboard was created in the Windows10 operating system';

  component.append(titleLanguageChange);
  component.append(titleSistem);
  return component;
}
export { creatingInfo };
