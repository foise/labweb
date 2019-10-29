var pulloutArray = function (inputArray) {
  inputArray.forEach(function (element) {
    if (typeof (element) != 'number' && !Array.isArray(element)) {
      var position = inputArray.indexOf(element);
      inputArray.splice(position, 1);
    }
    if (Array.isArray(element)) {
      var elemArray = element.slice();
      var position = inputArray.indexOf(element);
      inputArray.splice(position, 1);

      var inputArrayCopy = inputArray.slice(position, inputArray.length);
      inputArray = inputArray.slice(0, position);

      for (var i = 0; i < elemArray.length; i++) {
        inputArray.push(elemArray[i]);
      }
      inputArray = inputArray.concat(inputArrayCopy);
    }
  });
  console.log(inputArray)
}
