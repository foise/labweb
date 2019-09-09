document.querySelector('#card').oninput = function () {
  let val = this.value.trim();
  let cardItems = document.querySelectorAll('.card');
  if (val != '') {
    cardItems.forEach(function (elem) {
      if (elem.innerText.search(val) == -1) {
        elem.classList.add('hide');
      } else {
        elem.classList.remove('hide');
      }
    });
  } else {
    cardItems.forEach(function (elem) {
      elem.classList.remove('hide');
    });
  }
}
