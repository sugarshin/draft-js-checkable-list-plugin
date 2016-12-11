/* @flow */

import type { EditorState } from 'draft-js'
import type Editor from 'draft-js-plugins-editor'

export type PluginFunctions = {
  getPlugins: () => Array<Object>,
  getProps: () => Object,
  setEditorState: (editorState: EditorState) => void,
  getEditorState: () => EditorState,
  getReadOnly: () => boolean,
  setReadOnly: (readOnly: boolean) => void,
  getEditorRef: () => Editor,
}
