export const timerElement = document.querySelector('.hero__timer');
export const deadlineValue = timerElement.getAttribute('data-timer-deadline');

export const timer = deadline => {
  const timerBlockDays = document.querySelector('.timer__count_days');
  const timerBlockHours = document.querySelector('.timer__count_hours');
  const timerBlockMinutes = document.querySelector('.timer__count_minutes');
  const daysUnitsElement = document.querySelector('.timer__units_days');
  const hoursUnitsElement = document.querySelector('.timer__units_hours');
  const minutesUnitsElement = document.querySelector('.timer__units_minutes');

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = Date.now();
    const timeRemaining = dateStop - dateNow;

    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60).toString().padStart(2, '0');
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24).toString().padStart(2, '0');
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

    return {timeRemaining, minutes, hours, days};
  }
  const start = (days, hours, minutes) => {
    const timer = getTimeRemaining();

    timerBlockDays.textContent = timer.days;
    timerBlockHours.textContent = timer.hours;
    timerBlockMinutes.textContent = timer.minutes;

    if (timer.days === 1 || timer.days === 21 || timer.days === 31) {
      daysUnitsElement.textContent = 'день';
    } else if ((timer.days > 1 && timer.days < 5) || (timer.days > 21 && timer.days < 25)) {
      daysUnitsElement.textContent = 'дня';
    } else if((timer.days > 4 && timer.days < 21) || (timer.days > 24 && timer.days <31)) {
      daysUnitsElement.textContent = 'дней';
    }

    if (timer.hours === '01' || timer.hours % 10 === 1 && timer.hours !== '11') {
      hoursUnitsElement.textContent = 'час';
  } else if ((timer.hours === '02' || timer.hours === '03' || timer.hours === '04') || (timer.hours % 10 > 1 && timer.hours % 10 < 5 && !(timer.hours > '11' && timer.hours < '15'))) {
      hoursUnitsElement.textContent = 'часа';
  } else {
      hoursUnitsElement.textContent = 'часов';
  }

  if (timer.minutes === '01' || timer.minutes % 10 === 1 && timer.minutes !== '11') {
    minutesUnitsElement.textContent = 'минута';
} else if ((timer.minutes === '02' || timer.minutes === '03' || timer.minutes === '04') || (timer.minutes % 10 > 1 && timer.minutes % 10 < 5 && !(timer.minutes > '11' && timer.minutes < '15'))) {
    minutesUnitsElement.textContent = 'минуты';
} else {
    minutesUnitsElement.textContent = 'минут';
}

if (timer.days <= 0 && timer.hours <= '00' && timer.minutes <= '00') {
  const heroTimer = document.querySelector('.hero__timer');
  const heroText = document.querySelector('.hero__text');
  if (heroText && heroTimer) {
    heroText.remove();
    heroTimer.remove();
  }
}

    const intervalId = setTimeout(start, 60000);
  }
  start();
};