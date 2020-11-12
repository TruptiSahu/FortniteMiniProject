const body = document.querySelector('body');
const text = document.querySelector('.text');

let shadowExtend = 500;

let textShadowValue = '';
for (let i = 1; i <= shadowExtend; i++) {
  if (i < shadowExtend) {
    textShadowValue += `${i}px ${i}px 2px #05d65f,`;
    console.log(textShadowValue);
  } else {
    textShadowValue += `${i}px ${i}px 2px #05d65f`;
    console.log(textShadowValue);
  }
}

text.style.textShadow = textShadowValue;
