export const CheckableListItemUtils = {
  onTab(e, editorState) {
    if (editorState.param === 0) {
      return editorState
    }
    return {}
  }
}
