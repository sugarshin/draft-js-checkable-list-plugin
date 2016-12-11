export default `import React, { Component } from 'react'
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
`
