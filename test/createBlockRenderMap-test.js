import { CHECKABLE_LIST_ITEM, UNORDERED_LIST_ITEM } from 'draft-js-checkable-list-item'
import createBlockRenderMap, { wrapper } from '../src/createBlockRenderMap'

jest.unmock('draft-js-checkable-list-item')

describe('createBlockRenderMap', () => {
  it('return default blockRenderMap', () => {
    const ret = createBlockRenderMap({ sameWrapperAsUnorderedListItem: false })
    expect(ret.get(CHECKABLE_LIST_ITEM).element).toBe('li')
    expect(ret.get(CHECKABLE_LIST_ITEM).wrapper).toBe(wrapper)
  })

  it('return same wrapper as unordered-list-item', () => {
    const ret = createBlockRenderMap({ sameWrapperAsUnorderedListItem: true })
    expect(ret.get(CHECKABLE_LIST_ITEM).element).toBe('li')
    expect(ret.get(CHECKABLE_LIST_ITEM).wrapper).toBe(wrapper)
    expect(ret.get(UNORDERED_LIST_ITEM).element).toBe('li')
    expect(ret.get(UNORDERED_LIST_ITEM).wrapper).toBe(wrapper)
  })
})
