import createOnTab from '../src/createOnTab'

describe('onTab', () => {
  const config = { maxDepth: 4 }

  const mockOnTab = (e, editorState) => {
    if (editorState.param === 0) {
      return editorState
    }
    return {}
  }

  beforeEach(() => {
    createOnTab.__Rewire__('CheckableListItemUtils', { onTab: mockOnTab })
  })

  afterEach(() => {
    createOnTab.__ResetDependency__('CheckableListItemUtils')
  })

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
