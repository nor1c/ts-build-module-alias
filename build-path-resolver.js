const tsConfig = require("./tsconfig.json");
const tsConfigPaths = require("tsconfig-paths");
 
const baseUrl = "./dist"; // this will change the baseDir value in tsconfig.json from './src' to './dist'
const cleanup = tsConfigPaths.register({
  baseUrl,
  paths: tsConfig.compilerOptions.paths
});