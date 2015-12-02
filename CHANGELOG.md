# Changelog

Tags:

- [New Feature]
- [Bug Fix]
- [Breaking Change]
- [Documentation]
- [Internal]
- [Polish]

## Unpublished

- **Breaking Change**
  - Replace `__ENV__` with the result of evaluating `"production" !== process.env.NODE_ENV`
- **Internal**
  - Don't run tests twice in before release hook

## 1.1.1 (December 2, 2015)

- **Internal**
  - Add release helpers as npm run scripts to package.json
  - Employ best practices in package.json
  - Don't let the plugin's babel settings polute the tests

## 1.1.0 (November 29, 2015)

- **New Feature**
  - Add `evaluate` option

## 1.0.0 (November 29, 2015)

First public release.
