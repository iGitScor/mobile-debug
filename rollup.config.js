// Rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';

export default {
  entry: 'src/main.js',
  dest: 'dist/index' + (process.env.NODE_ENV === 'production' ? '.min' : '') + '.js',
  format: 'iife',
  plugins: [
    postcss({
      extensions: ['.css'],
    }),
    resolve({
      jsnext: false,
      main: true,
      browser: true,
    }),
    commonjs(),
    eslint({
      exclude: [
        'node_modules/**',
        '**/*.css',
      ],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
  ],
};
