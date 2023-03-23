AOS.init();

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const birthday = new Date('mar 14, 2024 00:00:00');
const timestampBirthday = birthday.getTime()

const countHours = setInterval(() => {
  const now = new Date();
  const currentTimestamp = now.getTime();

  updateTimes(currentTimestamp);
 
}, 1000);

const insertTimes = (daysUntilTheBirthday, hoursUntilTheBirthday, minutesUntilTheBirthday, secondsUntilTheBirthday) => {
  days.innerText = String(daysUntilTheBirthday).padStart(2, "0");
  hours.innerText = String(hoursUntilTheBirthday).padStart(2, "0");
  minutes.innerText = String(minutesUntilTheBirthday).padStart(2, "0");
  seconds.innerText = String(secondsUntilTheBirthday).padStart(2, "0");
};

const updateTimes = (currentTimestamp) => {
  const distanceTheBirthday = birthday - currentTimestamp
  const convertedTimeForDays = 1000 * 60 * 60 * 24
  const convertedTimeForHour = 1000 * 60 * 60
  const convertedTimeForMinutes = 1000 * 60

  const daysUntilTheBirthday = Math.floor(distanceTheBirthday / convertedTimeForDays);
  const hoursUntilTheBirthday = Math.floor(distanceTheBirthday % convertedTimeForDays / convertedTimeForHour);
  const minutesUntilTheBirthday = Math.floor(distanceTheBirthday % convertedTimeForHour / convertedTimeForMinutes);
  const secondsUntilTheBirthday = Math.floor(distanceTheBirthday % convertedTimeForMinutes / 1000);

  insertTimes(daysUntilTheBirthday, hoursUntilTheBirthday, minutesUntilTheBirthday, secondsUntilTheBirthday);
};