export { timer };

const timer = (id, deadLine) => {
  function zeroNum(num) {
    if (num <= 9) {
      return "0" + num;
    } else {
      return num;
    }
  }

  function getTimer(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      days: days,
    };
  }

  function setTimer(selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const t = getTimer(endTime);
      days.textContent = zeroNum(t.days);
      hours.textContent = zeroNum(t.hours);
      minutes.textContent = zeroNum(t.minutes);
      seconds.textContent = zeroNum(t.seconds);

      if (t.total < 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }
    }
  }
  setTimer(id, deadLine);
};
