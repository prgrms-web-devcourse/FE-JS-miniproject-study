import ColorBtn from "./button.js";

const body = document.querySelector('body')
const $target = document.querySelector('main')
let egg = 0;

const colorPicker = () => {
  let targetColor = '#'
  const hex = '0123456789abcdef'

  const pickIndex = () => Math.floor( Math.random() * 16 );
  
  for (let i = 0; i < 6; i++) {
    const index = pickIndex();
    targetColor += hex[index];
  }

  return targetColor;
}

new ColorBtn({
  $target, 
  onClick: () => {
    if (egg === 101) confirm("🎉 You've already clicked 100 times!\nDo you want to continue picking colors?")
    const color = colorPicker();
    console.log(color);
    body.style.backgroundColor = color;
    egg++;
  }
})