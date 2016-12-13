// @flow

import { EditorBlock, ContentBlock } from 'draft-js'
import React, { Component } from 'react'

export type Props = {
  block: ContentBlock,
  blockProps: {
    onChangeChecked: () => void,
    checked: boolean,
  },
}

const baseClassName = 'checkable-list-item-block'

export default class CheckableListItem extends Component {
  props: Props

  render() {
    const { block, blockProps: { onChangeChecked, checked } } = this.props
    return (
      <div
        className={`${baseClassName}${checked ? ' is-checked' : ''}`}
        data-offset-key={`${block.get('key')}-0-0`}
      >
        <div
          className={`${baseClassName}__checkbox`}
          contentEditable={false}
          suppressContentEditableWarning
        >
          <input type='checkbox' checked={checked} onChange={onChangeChecked} />
        </div>
        <div className={`${baseClassName}__text`}>
          <EditorBlock {...this.props} />
        </div>
      </div>
    )
  }
}
