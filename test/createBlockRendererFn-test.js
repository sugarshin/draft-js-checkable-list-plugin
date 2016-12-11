import { ContentBlock } from 'draft-js'
import { Map } from 'immutable'
import createBlockRendererFn from '../src/createBlockRendererFn'
import CheckableListItem from '../src/CheckableListItem'
import { CHECKABLE_LIST_ITEM } from '../src/constants'

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
