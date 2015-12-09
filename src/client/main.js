/*jshint browser:true*/

var mod = require('../common/mod.js');
var mod2 = require('../common/mod2.ts');

window.addEventListener('load', function () {
  document.getElementById('container').innerHTML = 'bar9' + mod.uselet() + mod2.uselet();
});
