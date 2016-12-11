import onTab from '../src/onTab'

const mockAdjustBlockDepth = (e, editorState) => {
  if (editorState.param === 0) {
    return editorState
  }
  return { m: true }
}

onTab.__Rewire__('adjustBlockDepth', mockAdjustBlockDepth)

describe('onTab', () => {
  let editorState
  const pluginsFunc = { getEditorState: () => editorState, setEditorState() {} }
  it('return value is `handled` ', () => {
    editorState = {}
    const ret = onTab({}, pluginsFunc)
    expect(ret).toBe('handled')
  })

  it('return value is `not-handled` ', () => {
    editorState = { param: 0 }
    const ret = onTab({}, pluginsFunc)
    expect(ret).toBe('not-handled')
  })
})
