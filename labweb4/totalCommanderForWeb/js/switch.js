window.addEventListener('keydown', function (event) {
  var content = document.querySelectorAll('.content');
  var directories = document.querySelectorAll('.directory-contents');
  var secondDirContents = directories[1].getElementsByClassName('content');
  var firstDirContents = directories[0].getElementsByClassName('content');

  function ChooseContent(fromDir, inDir) {
    for (let element of fromDir) {
      if (element.classList.contains('chosen')) {
        element.classList.toggle('chosen');
        inDir.item(0).classList.toggle('chosen');
      }
    }
  }

  //ArrowRight
  if (event.keyCode === 39) {
    ChooseContent(firstDirContents, secondDirContents);
  }

  //ArrowLeft
  if (event.keyCode === 37) {
    ChooseContent(secondDirContents, firstDirContents);
  }

  //ArrowDown
  if (event.keyCode === 40) {
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
