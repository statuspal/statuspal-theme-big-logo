import '../styles/app.scss';

window.setLocale = function (el) {
    console.log(el.value);
    window.location.href = window.location.href.split("?")[0] + "?lang=" + el.value;
}

var autoRefreshInterval = setInterval(function() {
  location.reload();
}, 60000);
