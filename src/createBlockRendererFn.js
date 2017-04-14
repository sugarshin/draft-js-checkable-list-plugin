// @flow

import type { ContentBlock } from 'draft-js'
import { CheckableListItemUtils, CHECKABLE_LIST_ITEM } from 'draft-js-checkable-list-item'

import type { PluginFunctions } from './types/PluginFunctions'

const createBlockRendererFn = ({ CheckableListItem }: Object): Function => (
  (block: ContentBlock, { getEditorState, setEditorState }: PluginFunctions): ?Object => {
    if (block.getType() === CHECKABLE_LIST_ITEM) {
      return {
        component: CheckableListItem,
        props: {
          onChangeChecked() {
            setEditorState(
              CheckableListItemUtils.toggleChecked(getEditorState(), block)
            )
          },
          checked: !!block.getData().get('checked'),
        },
      }
    }
  }
)

export default createBlockRendererFn
