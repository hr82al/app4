function $(callback) {
  window.addEventListener("load", () => {
    callback();
  });
  document.addEventListener("DOMContentLoaded", () => {
    callback();
  });
}