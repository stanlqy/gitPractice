/* Create a timer that displays the amount of months, days, 
hours and seconds until Christmas in real time, this project runs until its Christmas!!!
*/

setInterval(function () {
  let now = new Date();
  let year = now.getFullYear();
  let christmas = new Date(year, 11, 25);
  let diff = christmas - now; // Difference in milliseconds

  let seconds = Math.floor(diff / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;
  console.log(
    `Time until Christmas: ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`
  );
}, 1000);

//Testing for github
//Other testing for github