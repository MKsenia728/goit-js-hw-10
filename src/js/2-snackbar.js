import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const btnEl = document.querySelector('button[type="submit"]');
const delayEL = document.querySelector('input[name="delay"]');
const radioEls = document.querySelectorAll('input[name="state"]');

const getRadioValue = () =>
  Array.from(radioEls).filter(el => el.checked)[0].value;

const getDelayValue = () => +delayEL.value;

btnEl.addEventListener('click', e => {
  e.preventDefault();
  const delayValue = getDelayValue();
  const radioValue = getRadioValue();
  console.log(radioValue);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radioValue === 'fulfilled') {
        resolve(delayValue);
      } else if (radioValue === 'rejected') {
        reject(delayValue);
      }
    }, delayValue);
  });

  promise
    .then(success => {
      iziToast.show({
        position: 'topRight',
        width: 500,
        messageSize: 20,
        messageColor: '#F8D7D4',
        backgroundColor: '#FD4B3F',
        targetFirst: false,
        close: false,
        message: `✅ Fulfilled promise in ${success}ms`,
      });
    })
    .catch(error => {
      iziToast.show({
        position: 'topRight',
        width: 500,
        messageSize: 20,
        messageColor: '#F8D7D4',
        backgroundColor: '#33C682',
        targetFirst: false, 
        close: false,
        message: `❌ Rejected promise in ${error}ms`,
      });
    });
});
