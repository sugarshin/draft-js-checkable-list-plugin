// @flow

import { EditorState } from 'draft-js'

/**
 * mergeBlockMetadata
 *
 * @param {EditorState} editorState
 * @param {String} blockKey
 * @param {Object} metadata
 * @returns {EditorState} New editorState
 */
export default function mergeBlockMetadata(
  editorState: EditorState,
  blockKey: string,
  metadata: Object
): EditorState {
  const contentState = editorState.getCurrentContent()
  const updatedBlock = contentState.getBlockForKey(blockKey).mergeIn(['data'], metadata)
  const blockMap = contentState.getBlockMap().merge({ [blockKey]: updatedBlock })
  return EditorState.push(editorState, contentState.merge({ blockMap }), 'metadata-update')
}
