window.onload = function () {

  var days = document.querySelectorAll('td');
  var date = new Date();
  days.forEach(function (element) {
    var day = element.innerText;
    if (day == date.getDate()) {
      element.classList.add('active-day');
    }
  })
}
