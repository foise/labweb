document.querySelector('#buttonSearch').onclick = function () {
  let valSearch = card.value.trim();
  let cardItems = document.querySelectorAll('.card');
  cardItems.forEach(function (elem) {
    if (valSearch !== '' && elem.innerText.search(valSearch) === -1) {
      elem.classList.add('hide');
    } else {
      elem.classList.remove('hide');
    }
  });
}
