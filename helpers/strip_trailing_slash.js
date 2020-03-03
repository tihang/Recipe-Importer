function strip_trailing_slash(str) {
  if (str.substr(-1) === "/") {
    return str.substr(0, str.length - 1);
  }
  return str;
}

module.exports = strip_trailing_slash;
