window.addEventListener('keydown', function (event) {
  var content = document.querySelectorAll('.content');
  var directories = document.querySelectorAll('.directory-contents');
  var secondDirContents = directories[1].querySelectorAll('.content');
  var firstDirContents = directories[0].querySelectorAll('.content');

  //ArrowRight
  if (event.keyCode === 39) {
    firstDirContents.forEach(function (element, index) {
      if (element.classList.contains('chosen')) {
        element.classList.toggle('chosen');
        secondDirContents[0].classList.toggle('chosen');
      }
    });
  }

  //ArrowLeft
  if (event.keyCode === 37) {
    secondDirContents.forEach(function (element, index) {
      if (element.classList.contains('chosen')) {
        element.classList.toggle('chosen');
        firstDirContents[0].classList.toggle('chosen');
      }
    });

  }

  //ArrowDown
  if (event.keyCode === 40) {
    var bool = false;
    content.forEach(function (element, index) {
      if (element.classList.contains('chosen') && !bool && index + 1 < content.length) {
        element.classList.toggle('chosen');
        bool = true;
        content[index + 1].classList.toggle('chosen');
      }
    });
  }

  //ArrowUp
  if (event.keyCode === 38) {
    var bool = false;
    content.forEach(function (element, index) {
      if (element.classList.contains('chosen') && !bool && index - 1 >= 0) {
        element.classList.toggle('chosen');
        bool = true;
        content[index - 1].classList.toggle('chosen');
      }
    });
  }
}, true);
