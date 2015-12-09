Template for a state of the art Javascript project
==================================================

* Files can be ES2015 (through Babel) or TypeScript.
* Server automatically restarts on any relevant file change
* Client automatically reloads on javascript or html change
* Client automatically dynamically reloads CSS file changes

Used SublimeText 3 packages (if using TypeScript):
* ArcticTypescript

Setup notes:
* To generate tsd.d.ts:
```
npm install -g tsd
tsd query node --action install --save
```
* to update: `tsd reinstall --save`

TODO:
* test not working on Windows
* test results to console on save?
* minify, bundle CSS
* bundle vendor .js files?

References used:
* https://github.com/JacksonGariety/gulp-nodemon/issues/85
* https://pontifex.azurewebsites.net/my-typescript-project-structure-with-gulp/