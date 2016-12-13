// @flow

import type { ContentBlock } from 'draft-js'
import toggleChecked from './modifiers/toggleChecked'
import { CHECKABLE_LIST_ITEM } from './constants'

import type { PluginFunctions } from './types/PluginFunctions'

const createBlockRendererFn = (config: Object): Function => (
  (block: ContentBlock, { getEditorState, setEditorState }: PluginFunctions): ?Object => {
    if (block.getType() === CHECKABLE_LIST_ITEM) {
      return {
        component: config.CheckableListItem,
        props: {
          onChangeChecked() {
            setEditorState(
              toggleChecked(getEditorState(), block)
            )
          },
          checked: !!block.getData().get('checked'),
        },
      }
    }
  }
)

export default createBlockRendererFn
