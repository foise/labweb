var checkbox = document.getElementById('check-dark');
var calendar = document.getElementById('calendar-box');

checkbox.onclick = function () {
  calendar.classList.toggle('dark');
}
