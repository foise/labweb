document.querySelector('#buttonSearch').onclick = function () {
  let valSearch = document.getElementById('card-search').value.trim();
  let cardItems = document.querySelectorAll('.column');
  cardItems.forEach(function (elem) {
    if (valSearch !== '' && elem.innerText.search(valSearch) === -1) {
      elem.classList.add('hide');
    } else {
      elem.classList.remove('hide');
    }
  });
}
