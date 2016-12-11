import React, { Component } from 'react'
import { ContentBlock } from 'draft-js'
import { Map } from 'immutable'
import { shallow } from 'enzyme'
import CheckableListItem from '../../src/CheckableListItem'
import { CHECKABLE_LIST_ITEM } from '../../src/constants'

class MockEditorBlock extends Component {
  render() {
    return <div className='EditorBlock' />
  }
}

CheckableListItem.__Rewire__('EditorBlock', MockEditorBlock)

describe('<CheckableListItem />', () => {
  it('render checked', () => {
    const block = new ContentBlock({ key: 'item0', type: CHECKABLE_LIST_ITEM, data: Map({ checked: true }) })
    expect(
      shallow(
        <CheckableListItem
          block={block}
          blockProps={{
            onChangeChecked() {},
            checked: true,
          }}
        />
      ).html()
    ).toBe(
      '<div class="checkable-list-item-block is-checked" data-offset-key="item0-0-0">' +
        '<div class="checkable-list-item-block__checkbox" contenteditable="false">' +
          '<input type="checkbox" checked=""/>' +
        '</div>' +
        '<div class="checkable-list-item-block__text">' +
          '<div class="EditorBlock"></div>' +
        '</div>' +
      '</div>'
    )
  })
  it('render unchecked', () => {
    const block = new ContentBlock({ key: 'item0', type: CHECKABLE_LIST_ITEM, data: Map({ checked: false }) })
    expect(
      shallow(
        <CheckableListItem
          block={block}
          blockProps={{
            onChangeChecked() {},
            checked: false,
          }}
        />
      ).html()
    ).toBe(
      '<div class="checkable-list-item-block" data-offset-key="item0-0-0">' +
        '<div class="checkable-list-item-block__checkbox" contenteditable="false">' +
          '<input type="checkbox"/>' +
        '</div>' +
        '<div class="checkable-list-item-block__text">' +
          '<div class="EditorBlock"></div>' +
        '</div>' +
      '</div>'
    )
  })
})
