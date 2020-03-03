function sanitize_url(str) {
  if (str.substr(-1) === "/") {
    // remove trailing /
    return str.substr(0, str.length - 1).replace(/^http:\/\//i, "https://");
    // and replace http wiht https b/c there is a http:// link in given assignment which could be a typo
  }
  return str;
}

module.exports = sanitize_url;
