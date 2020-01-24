var pulloutArray = function (inputArray) {
  if (Array.isArray(inputArray)) {

    inputArray.forEach(function (element, index) {
      if (isNaN(element)) {
        console.log(element, index);
        inputArray.splice(index, 1);
      }
    });

    inputArray.forEach(function (element) {
      if (Array.isArray(element)) {
        var elemArray = element.slice();
        elemArray.forEach(function (elemOfElemArray) {
          if (typeof elemOfElemArray !== 'number' || isNaN(elemOfElemArray)) {
            var pos = elemArray.indexOf(elemOfElemArray);
            elemArray.splice(pos, 1);
          }
        });

        var position = inputArray.indexOf(element);
        inputArray.splice(position, 1);

        var inputArrayHalf = inputArray.slice(position, inputArray.length);
        inputArray = inputArray.slice(0, position);

        for (var i = 0; i < elemArray.length; i++) {
          inputArray.push(elemArray[i]);
        }
        inputArray = inputArray.concat(inputArrayHalf);
      }
    });

    inputArray.forEach(function (element) {
      if (typeof element !== 'number' && !Array.isArray(element)) {
        var pos = inputArray.indexOf(element);
        inputArray.splice(pos, 1);
      }
    });
    return inputArray;
  } else {
    return false;
  }
}
