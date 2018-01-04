import createOnTab from '../src/createOnTab'

jest.mock('draft-js-checkable-list-item')

describe('onTab', () => {
  const config = { maxDepth: 4 }

  it('return value is `function` ', () => {
    const ret = createOnTab(config)
    expect(typeof ret).toBe('function')
  })

  it('call `setEditorState`', () => {
    const editorState = {}
    const mockPluginFunctions = {
      getEditorState: () => editorState,
      setEditorState: jest.fn(),
    }
    createOnTab(config)({}, mockPluginFunctions)
    expect(mockPluginFunctions.setEditorState).toHaveBeenCalled()
  })

  it('noop', () => {
    const editorState = { param: 0 }
    const mockPluginFunctions = {
      getEditorState: () => editorState,
      setEditorState: jest.fn(),
    }
    createOnTab(config)({}, mockPluginFunctions)
    expect(mockPluginFunctions.setEditorState).not.toHaveBeenCalled()
  })
})
