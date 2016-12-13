// @flow

import type { EditorState, ContentBlock } from 'draft-js'
import mergeBlockMetadata from './mergeBlockMetadata'

const toggleChecked = (editorState: EditorState, block: ContentBlock): EditorState => {
  return mergeBlockMetadata(editorState, block.getKey(), { checked: !block.getData().get('checked') })
}

export default toggleChecked
