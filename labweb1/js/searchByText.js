document.querySelector('#card') = function () {
  let valSearch = this.value.trim();
  let cardItems = document.querySelectorAll('.card');
  cardItems.forEach(function (elem) {
    if (valSearch !== '') {
      if (elem.innerText.search(valSearch) === -1) {
        elem.classList.add('hide');
      } else {
        elem.classList.remove('hide');
      }
    } else {
      elem.classList.remove('hide');
    }
  });
}
