// set the countdown date
var countDownDate = new Date("June 31, 2023 00:00:00").getTime();

// update the countdown every second
var x = setInterval(function () {
  // get the current date and time
  var now = new Date().getTime();

  // calculate the time remaining
  var timeRemaining = countDownDate - now;

  // calculate days, hours, minutes, and seconds remaining
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // update the countdown display
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // display "Expired" when countdown is over
  if (timeRemaining < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "Expired";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("minutes").innerHTML = "";
    document.getElementById("seconds").innerHTML = "";
  }
}, 1000);
