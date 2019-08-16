import '../styles/app.scss';

window.setLocale = function (el) {
  window.location.href = window.location.href.split("?")[0] + "?lang=" + el.value;
}

