// @flow

import React from 'react'
import { Map } from 'immutable'
import { CHECKABLE_LIST_ITEM, UNORDERED_LIST_ITEM } from './constants'

// https://github.com/facebook/draft-js/blob/master/src/model/immutable/DefaultDraftBlockRenderMap.js#L20
const wrapper = <ul className='public-DraftStyleDefault-ul' />

const createBlockRenderMap = (config: Object): Map => {
  const blockRenderMap = Map({
    [CHECKABLE_LIST_ITEM]: {
      element: 'li',
      wrapper,
    },
  })

  if (config.sameWrapperAsUnorderedListItem) {
    return blockRenderMap.merge(Map({
      [UNORDERED_LIST_ITEM]: {
        element: 'li',
        wrapper,
      },
    }))
  }

  return blockRenderMap
}

export default createBlockRenderMap
export { wrapper } // for test
