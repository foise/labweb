document.querySelector('#buttonSearch').onclick = function CardSearch() {
  let valSearch = document.getElementById('card-search').value.trim();
  valSearch = valSearch.toLowerCase();
  let cardItems = document.querySelectorAll('.column');
  cardItems.forEach(function (elem) {
    cardText = elem.innerText.toLowerCase();
    if (valSearch !== '' && cardText.search(valSearch) === -1) {
      elem.classList.add('hide');
    } else {
      elem.classList.remove('hide');
    }
  });
}
