Template for a state of the art Javascript project
==================================================

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
* ts and js tasks are exiting immediately despite not being done?
* lint errors to console on save/reload? TypeScript just fails to compile, so maybe that's fine for TS files
* test results to console on save? separate task for this?
* server should not restart on save of client file

References used:
* https://github.com/JacksonGariety/gulp-nodemon/issues/85
* https://pontifex.azurewebsites.net/my-typescript-project-structure-with-gulp/