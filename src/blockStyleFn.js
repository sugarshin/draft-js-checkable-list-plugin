// @flow

import { CHECKABLE_LIST_ITEM } from 'draft-js-checkable-list-item'

import type { ContentBlock } from 'draft-js'

const blockStyleFn = (block: ContentBlock): ?string => {
  if (block.getType() === CHECKABLE_LIST_ITEM) {
    return CHECKABLE_LIST_ITEM
  }
}

export default blockStyleFn
