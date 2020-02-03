import appTemplate from '../listing.template.html';
window.onload = function () {
  var listingElements = ['apple', 'orange'];
  var storeElements = ['Banana', 'Kiwi'];


  var compiled = _.template(appTemplate)({
    listing: listingElements,
    store: storeElements
  });
  document.querySelector('.app').innerHTML = compiled;

  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }

  function truncateTables() {
    listingElements.splice(0);
    storeElements.splice(0);
  }

  function addToList() {
    var newElem = prompt('Enter new element', 'new');
    listingElements.push(newElem);
  }

  function sortStoreArray() {
    storeElements.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
  }

  function deleteSelectedElement() {
    var storeSelect = document.querySelector('.store-select option:checked');
    var listingSelect = document.querySelector('.listing-select option:checked');
    if (listingSelect != null) {
      var elementPosList = listingElements.indexOf(listingSelect.innerText);
    } else {
      var elementPosStore = storeElements.indexOf(storeSelect.innerText);
    }
    if (elementPosList > -1) {
      listingElements.splice(elementPosList, 1);
    }
    if (elementPosStore > -1) {
      storeElements.splice(elementPosStore, 1);
    }
  }

  function updateUI() {
    var storeSelect = document.querySelector('.store-select');
    var listingSelect = document.querySelector('.listing-select');
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';

    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

  var addButton = document.querySelector('#add-button');
  var delButton = document.querySelector('#del-button');
  var truncButton = document.querySelector('#trunc-button');
  var addToListing = document.querySelector('#add-listing');
  var sortStore = document.querySelector('#sort-store');

  addButton.onclick = function () {
    var selectedOption = document.querySelector('.listing-select option:checked');
    addToStoreElements(selectedOption.innerText);
    updateUI();
  }
  delButton.onclick = function () {
    deleteSelectedElement();
    updateUI();
  }
  truncButton.onclick = function () {
    truncateTables();
    updateUI();
  }
  addToListing.onclick = function () {
    addToList();
    updateUI();
  }
  sortStore.onclick = function () {
    sortStoreArray();
    updateUI();
  }
};