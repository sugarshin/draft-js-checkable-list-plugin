/* @flow */

import adjustBlockDepth from './modifiers/adjustBlockDepth'

import type { PluginFunctions } from './types/PluginFunctions'

const onTab = (e: SyntheticKeyboardEvent, { getEditorState, setEditorState }: PluginFunctions): string => {
  const editorState = getEditorState()
  const newEditorState = adjustBlockDepth(e, editorState, 4)
  if (newEditorState !== editorState) {
    setEditorState(newEditorState)
    return 'handled'
  }
  return 'not-handled'
}

export default onTab
