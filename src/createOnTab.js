// @flow

import adjustBlockDepth from './modifiers/adjustBlockDepth'

import type { PluginFunctions } from './types/PluginFunctions'

const createOnTab = (config: Object): Function => {
  return (event: SyntheticKeyboardEvent, { getEditorState, setEditorState }: PluginFunctions): void => {
    const editorState = getEditorState()

    const newEditorState = adjustBlockDepth(event, editorState, config.maxDepth)

    if (editorState !== newEditorState) {
      setEditorState(newEditorState)
    }
  }
}

export default createOnTab
