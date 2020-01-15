module.exports = function parseStringAsArray(arrayString) {
  return arrayString.split(',').map(value => value.trim());
}