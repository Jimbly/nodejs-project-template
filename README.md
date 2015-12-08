Template for a state of the art Javascript project
==================================================

Recommended SublimeText packages:
* ArcticTypescript

Setup notes:
* To generate tsd.d.ts:
```
npm install -g tsd
tsd query node --action install --save
```
* to update `tsd reinstall --save`

TODO:

* linting something for typescript?
* lint errors to console on save/reload?
* test results to console on save? separate task for this?

References used:
https://github.com/JacksonGariety/gulp-nodemon/issues/85
https://pontifex.azurewebsites.net/my-typescript-project-structure-with-gulp/