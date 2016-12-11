import { EditorState, ContentState, ContentBlock } from 'draft-js'
import { Map } from 'immutable'
import toggleChecked from '../../src/modifiers/toggleChecked'
import { CHECKABLE_LIST_ITEM } from '../../src/constants'

describe('toggleChecked', () => {
  let editorState
  const KEY = '0'

  beforeEach(() => {
    const content = ContentState.createFromBlockArray([
      new ContentBlock({ key: KEY, type: CHECKABLE_LIST_ITEM, data: Map({ checked: false }) })
    ])
    editorState = EditorState.createWithContent(content)
  })

  it('Toggle', () => {
    const newEditorState = toggleChecked(editorState, editorState.getCurrentContent().getBlockForKey(KEY))
    const block = newEditorState.getCurrentContent().getBlockForKey(KEY)
    expect(block.getData().get('checked')).toBe(true)
  })
})
