import external from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript'
import filesize from 'rollup-plugin-filesize'
import progress from 'rollup-plugin-progress'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: './src/index.ts',
  output: [
    {
      file: 'lib/index.es.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'lib/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    nodeResolve(),
    commonjs(),
    typescript({
      lib: ["es5", "es6", "dom"],
      target: "es5"
    }),
    babel(),
    filesize(),
    progress(),
  ]
}
