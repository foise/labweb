document.querySelector('#card').oninput = function () {
  let valSearch = this.value.trim();
  let cardItems = document.querySelectorAll('.card');
  if (valSearch != '') {
    cardItems.forEach(function (elem) {
      if (elem.innerText.search(valSearch) == -1) {
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
