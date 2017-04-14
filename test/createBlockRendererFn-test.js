import { ContentBlock } from 'draft-js'
import { Map } from 'immutable'
import { CheckableListItem, CHECKABLE_LIST_ITEM } from 'draft-js-checkable-list-item'
import createBlockRendererFn from '../src/createBlockRendererFn'

describe('createBlockRendererFn', () => {
  it('render `checkable-list-item` block', () => {
    const block = new ContentBlock({ key: 'item0', type: CHECKABLE_LIST_ITEM, data: Map({ checked: true }) })
    const pluginsFunc = { getEditorState() {}, setEditorState() {} }
    const ret = createBlockRendererFn({ CheckableListItem })(block, pluginsFunc)
    expect(ret).toBeTruthy()
  })

  it('noop', () => {
    const block = new ContentBlock({ key: 'item0', type: 'unstyled' })
    const pluginsFunc = { getEditorState() {}, setEditorState() {} }
    const ret = createBlockRendererFn({ CheckableListItem })(block, pluginsFunc)
    expect(ret).toBeUndefined()
  })
})
