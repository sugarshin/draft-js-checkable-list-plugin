import React, { Component } from 'react'
import { EditorState, RichUtils } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createCheckableListPlugin from 'draft-js-checkable-list-plugin'
import 'draft-js/dist/Draft.css'
// Use 'draft-js-checkable-list-plugin/lib/plugin.css' instead
import 'draft-js-checkable-list-item/lib/CheckableListItem.css'
import 'draft-js-checkable-list-plugin/Button.styl'

const checkableListPlugin = createCheckableListPlugin()
const plugins = [checkableListPlugin]
const { Button } = checkableListPlugin

export default class DemoEditor extends Component {
  state = { editorState: EditorState.createEmpty() }

  onChange = editorState => this.setState({ editorState })

  focus = () => this.editor.focus()

  onTab = e => this.onChange(RichUtils.onTab(e, this.state.editorState, 4))

  handleKeyCommand = command => {
    const newEditorState = RichUtils.handleKeyCommand(this.state.editorState, command)
    if (newEditorState) {
      this.onChange(newEditorState)
      return 'handled'
    }
    return 'not-handled'
  }

  render() {
    return (
      <div>
        <div className='toolbar'>
          {Object.entries({ UL: 'unordered-list-item', OL: 'ordered-list-item' }).map(([label, type]) =>
            <span key={type} onMouseDown={this.createMouseDownHandler(type)} style={this.getStyle(type)}>
              {label}
            </span>
          )}
          <Button editorState={this.state.editorState} />
        </div>
        <div onClick={this.focus}>
          <Editor
            ref={c => this.editor = c}
            placeholder='Contents in here...'
            editorState={this.state.editorState}
            plugins={plugins}
            onChange={this.onChange}
            onTab={this.onTab}
            handleKeyCommand={this.handleKeyCommand}
          />
        </div>
      </div>
    )
  }

  toggleBlockType(type) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, type))
  }

  createMouseDownHandler(type) {
    return e => {
      e.preventDefault()
      this.toggleBlockType(type)
    }
  }

  getStyle(type) {
    return {
      cursor: 'pointer',
      margin: '0 1em 0 0',
      opacity: RichUtils.getCurrentBlockType(this.state.editorState) === type ? 1 : .4,
    }
  }
}
