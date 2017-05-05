/* eslint-env node */

// Node plugins
import path from 'path';

// Rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';

// Postcss plugins
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssurl from 'postcss-url';

// Rollup configuration
const libEntry = process.env.version || 'counter';
const buildEntry = path.resolve(`src/lib/${libEntry}.js`);

const buildName = process.env.version ? `${process.env.version}/` : '';
const libName = process.env.NODE_ENV === 'production' ? 'index.min.js' : 'index.js';
const buildDestination = path.resolve(`dist/${buildName}/${libName}`);

export default {
  entry: buildEntry,
  dest: buildDestination,
  format: 'iife',
  plugins: [
    postcss({
      extensions: ['.css'],
      plugins: [
        postcssurl({
          url: 'inline',
        }),

        cssnano(),

        autoprefixer(),
      ],
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
