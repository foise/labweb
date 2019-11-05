function check(data, expectedType) {
  if (expectedType === 'array' && Array.isArray(data) ||
    expectedType === 'number' && typeof data === 'number' ||
    expectedType === 'string' && typeof data === 'string' ||
    expectedType === 'object' && typeof data === 'object' && !Array.isArray(data) ||
    expectedType === 'null' && data === null) {
    return true;
  } else {
    return false;
  }
}
