module.exports = function (str) {
  return str.split("\n").map(x => "  " + x).join("\n");
}