import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import fs from 'fs';
import nodeEval from 'node-eval';

// getModuleExports & getNamedExports taken from:
// https://github.com/rollup/rollup-plugin-commonjs/issues/290
// serves to automate namedExports for @rollup/plugin-commonjs
function getModuleExports(moduleId) {
  const id = require.resolve(moduleId);
  const moduleOut = nodeEval(fs.readFileSync(id).toString(), id);
  let result = [];
  const excludeExports = /^(default|__)/;
  if (moduleOut && typeof moduleOut === 'object') {
    result = Object.keys(moduleOut)
      .filter(name => !excludeExports.test(name));
  }

  return result;
}

function getNamedExports(moduleIds) {
  const result = {};
  moduleIds.forEach( id => {
    result[id] = getModuleExports(id);
  });
  return result;
}

export default {
  input: './index.js',
  output: [
    {
      file: './dist/bundle.js',
      sourcemap: true,
      format: 'es'
    }
  ],
  plugins: [
    // peerDepsExternal enables auto setting of externalisation of peer dependencies,
    // as a result they will not be bundled into each package, and depend on those
    // dependencies being installed by the app using the component.
    peerDepsExternal(),
    resolve({
      include: ['/node_modules/'],
      extensions: ['.js', '.jsx']
    }),
    commonjs({
      include: ['/node_modules/'],
      namedExports: getNamedExports(['react', 'react-is'])
    }),
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
      presets: ['@babel/preset-react']
    }),
    terser()
  ]
};
