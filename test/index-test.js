import { Map } from 'immutable'
import createPlugin from '../src'

describe('createPlugin', () => {
  it('create plugin', () => {
    const ret = createPlugin({})
    expect(typeof ret.blockRendererFn).toBe('function')
    expect(ret.blockRenderMap).toBeInstanceOf(Map)
    expect(typeof ret.onTab).toBe('function')
    expect(typeof ret.blockStyleFn).toBe('function')
  })

  it('configured', () => {
    const ret = createPlugin({ theme: {}, disabled: true, sameWrapperAsUnorderedListItem: true, maxDepth: 3 })
    expect(typeof ret.blockRendererFn).toBe('function')
    expect(ret.blockRenderMap).toBeInstanceOf(Map)
    expect(typeof ret.onTab).toBe('function')
    expect(typeof ret.blockStyleFn).toBe('function')
  })
})
