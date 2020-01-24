function replaceString(text, searchString, repString) {
  if (typeof text !== 'string' || typeof searchString !== 'string' || typeof repString !== 'string') {
    return false;
  } else {
    var newText = text;
    for (var i = 0; i < text.length; i++) {
      var foundPos = text.indexOf(searchString);
      if (foundPos === -1) {
        return false;
      } else {
        searchString = searchString;
        newText = newText.replace(searchString, repString);
      }
    }
    return newText;
  }
}
