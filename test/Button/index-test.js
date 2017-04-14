import React from 'react'
import { EditorState, RichUtils } from 'draft-js'
import { CHECKABLE_LIST_ITEM } from 'draft-js-checkable-list-item'
import { shallow } from 'enzyme'
import Button from '../../src/Button'

describe('<Button />', () => {
  it('render with default icon', () => {
    expect(
      shallow(
        <Button
          store={{ setEditorState() {} }}
          editorState={EditorState.createEmpty()}
          theme={{}}
        />
      ).html()
    ).toBe(
      '<span class="checkable-list-item-button">' +
        '<span class="checkable-list-item-button__inner">' +
          '<span class="checkable-list-item-button__body">' +
            '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="510px" height="510px" viewBox="0 0 510 510"><g><g id="check-circle-outline"><path d="M150.45,206.55l-35.7,35.7L229.5,357l255-255l-35.7-35.7L229.5,285.6L150.45,206.55z M459,255c0,112.2-91.8,204-204,204 S51,367.2,51,255S142.8,51,255,51c20.4,0,38.25,2.55,56.1,7.65l40.801-40.8C321.3,7.65,288.15,0,255,0C114.75,0,0,114.75,0,255 s114.75,255,255,255s255-114.75,255-255H459z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>' +
          '</span>' +
        '</span>' +
      '</span>'
    )
  })

  it('render with children', () => {
    expect(
      shallow(
        <Button
          store={{ setEditorState() {} }}
          editorState={EditorState.createEmpty()}
          theme={{}}
        >CL</Button>
      ).html()
    ).toBe(
      '<span class="checkable-list-item-button">' +
        '<span class="checkable-list-item-button__inner">' +
          '<span class="checkable-list-item-button__body">' +
            'CL' +
          '</span>' +
        '</span>' +
      '</span>'
    )
  })

  it('render active with children', () => {
    const editorState = EditorState.createEmpty()
    const modified = RichUtils.toggleBlockType(
      editorState,
      CHECKABLE_LIST_ITEM
    )

    expect(
      shallow(
        <Button
          store={{ setEditorState() {} }}
          editorState={modified}
          theme={{}}
        >CL</Button>
      ).html()
    ).toBe(
      '<span class="checkable-list-item-button active">' +
        '<span class="checkable-list-item-button__inner">' +
          '<span class="checkable-list-item-button__body">' +
            'CL' +
          '</span>' +
        '</span>' +
      '</span>'
    )
  })
})
