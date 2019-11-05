function replaceString(text, searchString, repString) {
  if (typeof text != 'string' || typeof searchString != 'string' || typeof repString != 'string') {
    console.log('Not String input');
  } else {
    text.toLowerCase();
    searchString.toLowerCase();
    var foundPos = 0;

    while (foundPos === 0) {
      foundPos = text.indexOf(searchString);
      if (foundPos === -1) {
        console.log('string not found');
        return false;
      } else {
        return text.replace(searchString, repString);
      }
    }
  }
}
