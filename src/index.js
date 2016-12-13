// @flow

import decorateComponentWithProps from 'decorate-component-with-props'
import createBlockRendererFn from './createBlockRendererFn'
import createBlockRenderMap from './createBlockRenderMap'
import createOnTab from './createOnTab'
import blockStyleFn from './blockStyleFn'
import CheckableListItem from './CheckableListItem'
import Button from './Button'

const checkableListPlugin = (config: Object = {}): Object => {
  const store = {
    getEditorState: null,
    setEditorState: null,
  }
  const theme = config.theme ? config.theme : {}
  const disabled = !!config.disabled
  const checkableListItemProps = {
    theme,
    disabled,
  }

  const blockRendererConfig = {
    CheckableListItem: decorateComponentWithProps(CheckableListItem, checkableListItemProps),
    ...config,
  }

  const blockRenderMapConfig = {
    sameWrapperAsUnorderedListItem: !!config.sameWrapperAsUnorderedListItem,
  }

  const onTabConfig = {
    maxDepth: config.maxDepth || 4,
  }

  const buttonConfig = {
    store,
    theme: config.buttonTheme || {},
  }

  return {
    initialize({ setEditorState, getEditorState }) {
      store.setEditorState = setEditorState
      store.getEditorState = getEditorState
    },
    blockRendererFn: createBlockRendererFn(blockRendererConfig),
    blockRenderMap: createBlockRenderMap(blockRenderMapConfig),
    onTab: createOnTab(onTabConfig),
    Button: decorateComponentWithProps(Button, buttonConfig),
    blockStyleFn,
  }
}

export default checkableListPlugin
