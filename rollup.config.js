import external from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript'
import filesize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';

export default {
  input: './src/index.ts',
  output: [
    {
      file: 'lib/index.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    // Automatically externalize peerDependencies in a rollup bundle.
    external(),

    // Prints out typescript syntactic and semantic diagnostic messages
    typescript({
      lib: ["es5", "es6", "dom"],
      target: "es5"
    }),

    // logs the filesize in cli when done
    filesize(),

    // Progress while building
    progress({ clearLine: false }),
  ]
}
