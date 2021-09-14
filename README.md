Another version of how to use module alias on production from [Kehrlann](https://github.com/Kehrlann)/[module-alias-74](https://github.com/Kehrlann/module-alias-74/blob/master/prod-paths.js).

Add `tsconfig-paths` to the project
```
yarn add tsconfig-paths
```

#### Test this repo:
Run in development env
```
$ yarn dev-ts
```

Run build and test it out:
```
$ yarn build && yarn serve
```

or in production:
```
$ yarn build && yarn start
```