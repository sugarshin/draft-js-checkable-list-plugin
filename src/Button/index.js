// @flow

import React, { Component } from 'react'
import { RichUtils } from 'draft-js'
import { CHECKABLE_LIST_ITEM } from 'draft-js-checkable-list-item'
import unionClassNames from 'union-class-names'
import DefaultIcon from './DefaultIcon'

import type { EditorState } from 'draft-js'
export type Props = {
  store: { setEditorState: (editorState: EditorState) => void },
  editorState: EditorState,
  theme: {
    button: ?string,
    active: ?string,
    buttonInner: ?string,
    buttonBody: ?string,
  },
  children: ?*,
}

export default class Button extends Component<Props> {
  toggleType = (event: SyntheticEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    this.props.store.setEditorState(
      RichUtils.toggleBlockType(
        this.props.editorState,
        CHECKABLE_LIST_ITEM
      )
    )
  }

  isActive = (): boolean => {
    return RichUtils.getCurrentBlockType(this.props.editorState) === CHECKABLE_LIST_ITEM
  }

  render() {
    const { theme, children } = this.props
    const button = theme.button || 'checkable-list-item-button'
    const active = theme.active || 'active'
    const className = this.isActive() ? unionClassNames(button, active) : button
    return (
      <span
        className={className}
        onMouseDown={this.toggleType}
      >
        <span className={theme.buttonInner || 'checkable-list-item-button__inner'}>
          <span className={theme.buttonBody || 'checkable-list-item-button__body'}>
            {children || <DefaultIcon />}
          </span>
        </span>
      </span>
    )
  }
}
