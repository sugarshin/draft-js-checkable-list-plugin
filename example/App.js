import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Fork from 'react-ghfork'
import hljs from 'highlight.js'
import code from './example-code'
import DemoEditor from './DemoEditor'
import 'react-ghfork/gh-fork-ribbon.ie.css'
import 'react-ghfork/gh-fork-ribbon.css'
import 'highlight.js/styles/github.css'
import './App.styl'

class App extends Component {
  componentDidMount() {
    this.demoEditor.focus()
    Array.from(document.querySelectorAll('pre')).forEach(el => hljs.highlightBlock(el))
  }

  render() {
    return (
      <div className='app'>
        <Fork project='sugarshin/draft-js-checkable-list-plugin' className='right' />
        <h1>draft-js-checkable-list-plugin</h1>
        <DemoEditor ref={c => this.demoEditor = c}/>
        <div><pre>{code}</pre></div>
      </div>
    )
  }
}

export default hot(module)(App)
