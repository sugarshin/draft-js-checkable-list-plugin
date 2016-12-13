// @flow

import { EditorState } from 'draft-js'
import adjustBlockDepthForContentState from 'draft-js/lib/adjustBlockDepthForContentState'
import { CHECKABLE_LIST_ITEM, UNORDERED_LIST_ITEM, ORDERED_LIST_ITEM } from '../constants'

const isList = (blockType: string): boolean => (
  blockType === CHECKABLE_LIST_ITEM || blockType === UNORDERED_LIST_ITEM || blockType === ORDERED_LIST_ITEM
)

const adjustBlockDepth = (
  event: SyntheticKeyboardEvent,
  editorState: EditorState,
  maxDepth: number
): EditorState => {
  // https://github.com/facebook/draft-js/blob/master/src/model/modifier/RichTextEditorUtil.js#L190
  const selection = editorState.getSelection()
  const key = selection.getAnchorKey()
  if (key !== selection.getFocusKey()) {
    return editorState
  }

  const content = editorState.getCurrentContent()
  const block = content.getBlockForKey(key)
  const type = block.getType()
  if (!isList(type)) {
    return editorState
  }

  event.preventDefault()

  // Only allow indenting one level beyond the block above, and only if
  // the block above is a list item as well.
  const blockAbove = content.getBlockBefore(key)
  if (!blockAbove) {
    return editorState
  }

  const typeAbove = blockAbove.getType()
  if (!isList(typeAbove)) {
    return editorState
  }

  const depth = block.getDepth()
  if (!event.shiftKey && depth === maxDepth) {
    return editorState
  }

  maxDepth = Math.min(blockAbove.getDepth() + 1, maxDepth)

  const withAdjustment = adjustBlockDepthForContentState(
    content,
    selection,
    event.shiftKey ? -1 : 1,
    maxDepth
  )

  return EditorState.push(
    editorState,
    withAdjustment,
    'adjust-depth'
  )
}

export default adjustBlockDepth
