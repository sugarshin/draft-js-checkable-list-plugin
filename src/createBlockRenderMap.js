// @flow

import {
  blockRenderMap,
  blockRenderMapForSameWrapperAsUnorderedListItem,
  WRAPPER as wrapper
} from 'draft-js-checkable-list-item'
import { Map } from 'immutable'

import type { Config } from './types/Config'

const createBlockRenderMap = (config: Config): Map => {
  return config.sameWrapperAsUnorderedListItem ?
    blockRenderMapForSameWrapperAsUnorderedListItem :
    blockRenderMap
}

export default createBlockRenderMap
export { wrapper } // for test
