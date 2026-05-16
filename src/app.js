const targetDate = new Date('June 15, 2026, 00:00:00');

const daysEl = document.querySelector('[data-value="days"]');
const hoursEl = document.querySelector('[data-value="hours"]');
const minsEl = document.querySelector('[data-value="mins"]');
const secsEl = document.querySelector('[data-value="secs"]');


const timer = setInterval(() => {
    const currentDate = new Date();
    const time = targetDate - currentDate;

    if (time <= 0) {
        clearInterval(timer);
        return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    daysEl.textContent = days < 10 ? "0" + days : days;
    hoursEl.textContent = hours < 10 ? "0" + hours : hours;
    minsEl.textContent = mins < 10 ? "0" + mins : mins;
    secsEl.textContent = secs < 10 ? "0" + secs : secs;
}, 1000);