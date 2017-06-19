# draft-js-checkable-list-plugin

[![CircleCI][circleci-image]][circleci-url]
[![Coverage Status][coveralls-image]][coveralls-url]

[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

Checkable list item plugin for the [draft-js-plugins-editor](https://github.com/draft-js-plugins/draft-js-plugins) .

```sh
yarn add draft-js-checkable-list-plugin
```

[Live demo](https://sugarshin.github.io/draft-js-checkable-list-plugin/)

## Usage

Example

```js
import React, { Component } from 'react'
import { EditorState } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createCheckableListPlugin from 'draft-js-checkable-list-plugin'
import 'draft-js-checkable-list-plugin/lib/plugin.css'

const checkableListPlugin = createCheckableListPlugin()
const plugins = [checkableListPlugin]

class App extends Component {
  state = { editorState: EditorState.createEmpty() }

  onChange = editorState => this.setState({ editorState })

  render() {
    return (
      <div>
        <Editor
          editorState={this.state.editorState}
          plugins={plugins}
          onChange={this.onChange}
        />
      </div>
    )
  }
}
```

## License

[MIT][license-url]

© sugarshin

[circleci-image]: https://circleci.com/gh/sugarshin/draft-js-checkable-list-plugin/tree/master.svg?style=svg&circle-token=d416d2a32786c1e139bac37cf6864b310b1da172
[circleci-url]: https://circleci.com/gh/sugarshin/draft-js-checkable-list-plugin/tree/master
[coveralls-image]: https://coveralls.io/repos/github/sugarshin/draft-js-checkable-list-plugin/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/sugarshin/draft-js-checkable-list-plugin?branch=master
[npm-image]: https://img.shields.io/npm/v/draft-js-checkable-list-plugin.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/draft-js-checkable-list-plugin
[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://sugarshin.mit-license.org/
