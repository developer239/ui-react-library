# UI React Library 📚

[![CircleCI](https://circleci.com/gh/developer239/ui-react-library.svg?style=svg)](https://circleci.com/gh/developer239/ui-react-library)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2e67c58143bc46edd516/test_coverage)](https://codeclimate.com/github/developer239/ui-react-library/test_coverag)
[![Maintainability](https://api.codeclimate.com/v1/badges/2e67c58143bc46edd516/maintainability)](https://codeclimate.com/github/developer239/ui-react-library/maintainability)
[![Greenkeeper badge](https://badges.greenkeeper.io/developer239/ui-react-library.svg)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm version](http://img.shields.io/npm/v/ui-react-library.svg?style=flat)](https://npmjs.org/package/ui-react-library "View this project on npm")

Working on side projects is fun but creating different components for every application can be frustrating. Custom UI library can help.

## Demo

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

You can try the application [here](https://react-ui-library.herokuapp.com) (it might take a while before the free server wakes up)

## Installation

Run `yarn add ui-react-library` and try it out!

If you want to see it in action feel free to take a look at my [react-apollo-graphql](https://github.com/developer239/react-apollo-graphql) application.

## Commit Guidelines

| Commit Type | Title                    | Description                                                                                                 | Emoji | Release                        | Include in changelog |
| :---------: | ------------------------ | ----------------------------------------------------------------------------------------------------------- | :---: | ------------------------------ | :------------------: |
|   `feat`    | Features                 | A new feature                                                                                               |  ✨   | `minor`                        |        `true`        |
|    `fix`    | Bug Fixes                | A bug Fix                                                                                                   |  🐛   | `patch`                        |        `true`        |
|   `docs`    | Documentation            | Documentation only changes                                                                                  |  📚   | `patch` if `scope` is `readme` |        `true`        |
|   `style`   | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |  💎   | -                              |        `true`        |
| `refactor`  | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |  📦   | -                              |        `true`        |
|   `perf`    | Performance Improvements | A code change that improves performance                                                                     |  🚀   | `patch`                        |        `true`        |
|   `test`    | Tests                    | Adding missing tests or correcting existing tests                                                           |  🚨   | -                              |        `true`        |
|   `build`   | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |   🛠   | `patch`                        |        `true`        |
|    `ci`     | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |  ⚙️   | -                              |        `true`        |
|   `chore`   | Chores                   | Other changes that don't modify src or test files                                                           |  ♻️   | -                              |        `true`        |
|  `revert`   | Reverts                  | Reverts a previous commit                                                                                   |   🗑   | -                              |        `true`        |

|    Commit Type     | Maps to | Title             | Description                     | Emoji |
| :----------------: | ------- | ----------------- | ------------------------------- | :---: |
|     `initial`      | `feat`  | Initial           | Initial commit                  |  🎉   |
|   `dependencies`   | `fix`   | Dependencies      | Update dependencies             |  ⬆️   |
| `peerDependencies` | `fix`   | Peer dependencies | Update peer dependencies        |  ⬆️   |
| `devDependencies`  | `chore` | Dev dependencies  | Update development dependencies |  ⬆️   |
|     `metadata`     | `fix`   | Metadata          | Update metadata (package.json)  |  📦   |