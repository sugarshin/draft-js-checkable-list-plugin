import 'react-ghfork/gh-fork-ribbon.ie.css'
import 'react-ghfork/gh-fork-ribbon.css'
import 'highlight.js/styles/github.css'
import 'draft-js/dist/Draft.css'
import './App.styl'
import React, { Component } from 'react'
import Fork from 'react-ghfork'
import { EditorState, RichUtils } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import hljs from 'highlight.js'
import createCheckableListPlugin from '../src'
import code from './example-code'
import '../src/CheckableListItem.styl'
import '../src/Button.styl'

const checkableListPlugin = createCheckableListPlugin()
const plugins = [checkableListPlugin]
const { Button } = checkableListPlugin

export default class App extends Component {
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

  componentDidMount() {
    this.focus()
    Array.from(document.querySelectorAll('pre')).forEach(el => hljs.highlightBlock(el))
  }

  render() {
    return (
      <div className='app'>
        <Fork project='sugarshin/draft-js-checkable-list-plugin' className='right' />
        <h1>draft-js-checkable-list-plugin</h1>
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
        <div><pre>{code}</pre></div>
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
