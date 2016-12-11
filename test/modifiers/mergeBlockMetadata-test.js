import { EditorState, ContentState, ContentBlock } from 'draft-js'
import mergeBlockMetadata from '../../src/modifiers/mergeBlockMetadata'

describe('mergeBlockMetadata', () => {
  let editorState
  const KEY = '0'

  beforeEach(() => {
    const content = ContentState.createFromBlockArray([new ContentBlock({ key: KEY })])
    editorState = EditorState.createWithContent(content)
  })

  it('Add', () => {
    const newEditorState = mergeBlockMetadata(editorState, KEY, { foo: 1 })
    const block = newEditorState.getCurrentContent().getBlockForKey(KEY)
    expect(block.getData().get('foo')).toBe(1)
  })

  it('Update', () => {
    let newEditorState = mergeBlockMetadata(editorState, KEY, { foo: 1 })
    newEditorState = mergeBlockMetadata(newEditorState, KEY, { foo: 2 })
    const block = newEditorState.getCurrentContent().getBlockForKey(KEY)
    expect(block.getData().get('foo')).toBe(2)
  })

  it('Remove', () => {
    let newEditorState = mergeBlockMetadata(editorState, KEY, { foo: 1 })
    newEditorState = mergeBlockMetadata(newEditorState, KEY, { foo: void 0 })
    const block = newEditorState.getCurrentContent().getBlockForKey(KEY)
    expect(block.getData().get('foo')).toBeUndefined()
  })

  it('Merge', () => {
    let newEditorState = mergeBlockMetadata(editorState, KEY, { foo: 1 })
    newEditorState = mergeBlockMetadata(newEditorState, KEY, { bar: 2 })
    const block = newEditorState.getCurrentContent().getBlockForKey(KEY)
    expect(block.getData().get('foo')).toBe(1)
    expect(block.getData().get('bar')).toBe(2)
  })
})
