import external from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript'
import filesize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';
import babel from 'rollup-plugin-babel'

export default {
  input: './src/index.ts',
  output: [
    {
      file: 'esm/index.js',
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
    typescript({
      lib: ["es5", "es6", "dom"],
      target: "es5"
    }),
    babel({
      babelrc: false,
      presets: [['env', { modules: false }]],
    }),
    filesize(),
    progress({ clearLine: false }),
  ]
}
