const CssClassesBubles = {
  BUBBLES: 'bubbles',
  LEFT: 'bubbles-left',
  RIGHT: 'bubbles-right',
};
function creatingBubbles() {
  const component = document.createElement('section');
  const bubblesLeft = document.createElement('div');
  const bubblesRight = document.createElement('div');

  component.classList.add(CssClassesBubles.BUBBLES);
  bubblesLeft.classList.add(CssClassesBubles.LEFT);
  bubblesRight.classList.add(CssClassesBubles.RIGHT);

  component.append(bubblesLeft);
  component.append(bubblesRight);
  return component;
}
export { creatingBubbles };
