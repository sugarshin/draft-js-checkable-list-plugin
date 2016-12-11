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
import '../src/CheckableListItem.styl'
import code from './example-code'

const checkableListPlugin = createCheckableListPlugin()
const plugins = [checkableListPlugin]

export default class App extends Component {
  state = { editorState: EditorState.createEmpty() }

  onChange = editorState => this.setState({ editorState })

  focus = () => this.editor.focus()

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
          <span onMouseDown={this.createMouseDownHandler('unordered-list-item')} style={this.getStyle('unordered-list-item')}>UL</span>
          <span onMouseDown={this.createMouseDownHandler('ordered-list-item')} style={this.getStyle('ordered-list-item')}>OL</span>
          <span onMouseDown={this.createMouseDownHandler('checkable-list-item')} style={this.getStyle('checkable-list-item')}>✔</span>
        </div>
        <div onClick={this.focus}>
          <Editor
            ref={c => this.editor = c}
            placeholder='Contents in here...'
            editorState={this.state.editorState}
            plugins={plugins}
            onChange={this.onChange}
          />
        </div>
        <div><pre>{code}</pre></div>
      </div>
    )
  }

  toggleBlockType(type: string) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, type))
  }

  createMouseDownHandler(type: string): Function {
    return (ev: SyntheticEvent) => {
      ev.preventDefault()
      this.toggleBlockType(type)
    }
  }

  getStyle(type: string): Object {
    return {
      cursor: 'pointer',
      margin: '0 1em 0 0',
      color: RichUtils.getCurrentBlockType(this.state.editorState) === type ? 'indianred' : 'inherit',
    }
  }
}
