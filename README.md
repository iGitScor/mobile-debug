<h1 align="center">
<img src="https://raw.githubusercontent.com/iGitScor/mobile-debug/master/logo.png" />
<br />
Mobile debugger
</h1>

[![Build Status][build-badge]][build]
[![Dependencies][dependencyci-badge]][dependencyci]
[![dependencies Status][dependencies-badge]][dependencies]
[![devDependencies Status][devDependencies-badge]][devDependencies]
[![MIT License][license-badge]][LICENSE]

> Mobile debug UI helper

Debugging on mobile is not easy, this tool shows errors and logs in a HTML pane.

## Compatibility

Use of [autoprefixer](https://github.com/postcss/autoprefixer) for the style and [babel](https://github.com/babel/babel) + [babel-preset-env](https://github.com/babel/babel-preset-env) for the script.

- `last 2 version`
- `> 1%`

**Browsers:**

![Android][android-badge]
![Chrome android][chrome-android-badge]
![Firefox android][firefox-android-badge]
![Blackberry][blackberry-badge]
![IE Mobile][ie-mobile-badge]
![iOS][ios-badge]
![Opera Mobile][opera-mobile-badge]

_Desktop browsers are not the target for this library_

## Installing

```shell
npm i mobile-debug
```

### Getting started

**Javascript**
```html
<script src="node_modules/mobile-debug/dist/index.js"></script>
```

Navigate to `http://your_url/#mobile-debug`

#### Bundler tools

You can import files included in `src` folder in your rollup or webpack build.

## Developing

```shell
git clone https://github.com/{your fork}/mobile-debug.git
cd mobile-debug/
```

Replace `{your fork}` by your github username.

## Build

### Development

```shell
npm run build
```

### Production

```shell
npm run build:prod
```

## Contributing

If you'd like to contribute, please fork the repository and use a feature
branch. All contributions are welcome. Please make a pull request and make sure things still pass after running `npm test`.
Ensure you've read the [contribution guidelines](CONTRIBUTING.md) for more information and respect the [code of conduct](CODE_OF_CONDUCT.md)

### Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/2276944?v=3" width="100px;"/><br /><sub>Sebastien Correaud</sub>](http://twitter.com/iTweetScor)<br />🚇 [💻](https://github.com/iGitScor/mobile-debug/commits?author=iGitScor) [📖](https://github.com/iGitScor/mobile-debug/commits?author=iGitScor) [⚠️](https://github.com/iGitScor/mobile-debug/commits?author=iGitScor) |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## Licensing

The code in this project is licensed under MIT license.

[build-badge]: https://img.shields.io/travis/iGitScor/mobile-debug.svg?style=flat-square
[build]: https://travis-ci.org/iGitScor/mobile-debug
[dependencyci-badge]: https://dependencyci.com/github/iGitScor/mobile-debug/badge?style=flat-square
[dependencyci]: https://dependencyci.com/github/iGitScor/mobile-debug
[dependencies-badge]: https://david-dm.org/iGitScor/mobile-debug/status.svg?style=flat-square
[dependencies]: https://david-dm.org/iGitScor/mobile-debug
[devDependencies-badge]: https://david-dm.org/iGitScor/mobile-debug/dev-status.svg?style=flat-square
[devDependencies]: https://david-dm.org/iGitScor/mobile-debug?type=dev
[license-badge]: https://img.shields.io/npm/l/mobile-debug.svg?style=flat-square
[license]: https://github.com/iGitScor/mobile-debug/blob/master/LICENSE
[android-badge]: https://img.shields.io/badge/Android-%3E=%204-ff69b4.svg?style=flat-square
[chrome-android-badge]: https://img.shields.io/badge/Chrome%20android-%3E=%2057-ff69b4.svg?style=flat-square
[firefox-android-badge]: https://img.shields.io/badge/Firefox%20android-%3E=%2052-ff69b4.svg?style=flat-square
[blackberry-badge]: https://img.shields.io/badge/Blackberry-%2010-ff69b4.svg?style=flat-square
[ie-mobile-badge]: https://img.shields.io/badge/IE%20mobile-%3E=%2010-ff69b4.svg?style=flat-square
[ios-badge]: https://img.shields.io/badge/iOS-%3E=%205-ff69b4.svg?style=flat-square
[opera-mobile-badge]: https://img.shields.io/badge/Opera%20mobile-%3E=%2037-ff69b4.svg?style=flat-square
