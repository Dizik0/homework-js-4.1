import './styles.css';

const btnStartEl = document.querySelector('.start');
const btnStopEl = document.querySelector('.stop');
const bodyEl = document.querySelector('body');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalColorId;
const randomBgColorBody = () => {
  intervalColorId = setInterval(() => {
    const indexColor = colors[randomIntegerFromInterval(0, 5)];
    bodyEl.style.backgroundColor = `${indexColor}`;
  }, 1000);
  btnDisabledOffOn(true);
};

const stopRandomColor = () => {
  clearInterval(intervalColorId);
  btnDisabledOffOn(false);
};

const btnDisabledOffOn = boolean => (btnStartEl.disabled = boolean);
btnStartEl.addEventListener('click', randomBgColorBody);
btnStopEl.addEventListener('click', stopRandomColor);
