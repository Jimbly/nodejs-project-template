/*jshint browser:true*/

var js_mod = require('../common/js_mod');
var ts_mod = require('../common/ts_mod');

window.addEventListener('load', function () {
  document.getElementById('container').innerHTML = js_mod.uselet() +
    ts_mod.uselet();
});
