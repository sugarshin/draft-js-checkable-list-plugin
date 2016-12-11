import { ContentBlock } from 'draft-js'
import blockStyleFn from '../src/blockStyleFn'
import { CHECKABLE_LIST_ITEM } from '../src/constants'

describe('blockStyleFn', () => {
  it('return value is `checkable-list-item` ', () => {
    const block = new ContentBlock({ key: 'item0', type: CHECKABLE_LIST_ITEM })
    const ret = blockStyleFn(block)
    expect(ret).toBe(CHECKABLE_LIST_ITEM)
  })

  it('undefined', () => {
    const block = new ContentBlock({ key: 'item0', type: 'unstyled' })
    const ret = blockStyleFn(block)
    expect(ret).toBeUndefined()
  })
})
