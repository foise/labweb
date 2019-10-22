window.addEventListener('keydown', function (event) {
  var content = document.querySelectorAll('.content');
  var directories = document.querySelectorAll('.directory-contents');
  var secondDirContents = directories[1].getElementsByClassName('content');
  var firstDirContents = directories[0].getElementsByClassName('content');

  function ChooseContent(selectionType, fromDir, inDir, direction) {
    switch (selectionType) {
      case 1:
        for (let element of fromDir) {
          if (element.classList.contains('chosen')) {
            element.classList.toggle('chosen');
            inDir.item(0).classList.toggle('chosen');
          }
        }
        break;
      case 2:
        var bool = false;
        content.forEach(function (element, index) {
          condition = direction === "down" ? index + 1 < content.length : index - 1 >= 0;
          operator = direction === "down" ? index + 1 : index - 1;
          if (element.classList.contains('chosen') && !bool && condition) {
            element.classList.toggle('chosen');
            bool = true;
            content[operator].classList.toggle('chosen');
          }
        });
        break;
    }

  }

  //ArrowRight
  if (event.keyCode === 39) {
    ChooseContent(1, firstDirContents, secondDirContents);
  }

  //ArrowLeft
  if (event.keyCode === 37) {
    ChooseContent(1, secondDirContents, firstDirContents);
  }

  //ArrowDown
  if (event.keyCode === 40) {
    ChooseContent(2, secondDirContents, firstDirContents, "down");
  }

  //ArrowUp
  if (event.keyCode === 38) {
    ChooseContent(2, secondDirContents, firstDirContents, "up");
  }
}, true);
