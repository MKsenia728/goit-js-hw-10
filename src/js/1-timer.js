import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    deadline = validateDate(selectedDates[0]);
  },
};
const inputEl = document.querySelector('#datetime-picker');
const btnEl = document.querySelector('[data-start]');
btnEl.setAttribute('disabled', '');
let deadline;
const dateElements = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const validateDate = date => {
  if (date - Date.now() < 10000) {
    iziToast.show({
      position: 'topRight',
      messageColor: 'white',
      iconUrl: 'img/icon-error.svg',
      backgroundColor: '#EF4040',
      message: 'Please choose a date in the future',
    });
    btnEl.setAttribute('disabled', '');
  } else {
    btnEl.removeAttribute('disabled');
    return date;
  }
};

const startTimer = () => {
  const intervalID = setInterval(() => {
    const diff = deadline - Date.now();

    if (diff > 0) {
      btnEl.setAttribute('disabled', '');
      inputEl.setAttribute('disabled', '');
      const converteDate = convertMs(diff);
      console.log(dateElements);

      dateElements.days.textContent = addLeadingZero(converteDate.days);
      dateElements.hours.textContent = addLeadingZero(converteDate.hours);
      dateElements.minutes.textContent = addLeadingZero(converteDate.minutes);
      dateElements.seconds.textContent = addLeadingZero(converteDate.seconds);
    } else {
      stopTimer(intervalID);
    }
  }, 1000);
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const stopTimer = intervalID => {
  clearInterval(intervalID);
  inputEl.removeAttribute('disabled');
};

flatpickr(inputEl, options);
btnEl.addEventListener('click', startTimer);
