function replaceString(text, searchString, repString) {
  if (typeof text !== 'string' || typeof searchString !== 'string' || typeof repString !== 'string') {
    return 'Not String input';
  } else {
    text.toLowerCase();
    searchString.toLowerCase();
    var foundPos = 0;

    while (foundPos === 0) {
      foundPos = text.indexOf(searchString);
      if (foundPos === -1) {
        return 'string not found';
      } else {
        return text.replace(searchString, repString);
      }
    }
  }
}
