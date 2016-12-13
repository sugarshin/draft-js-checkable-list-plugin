// @flow

import decorateComponentWithProps from 'decorate-component-with-props'
import createBlockRendererFn from './createBlockRendererFn'
import createBlockRenderMap from './createBlockRenderMap'
import CheckableListItem from './CheckableListItem'
import createOnTab from './createOnTab'
import blockStyleFn from './blockStyleFn'

const checkableListPlugin = (config: Object = {}): Object => {
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

  return {
    blockRendererFn: createBlockRendererFn(blockRendererConfig),
    blockRenderMap: createBlockRenderMap(blockRenderMapConfig),
    onTab: createOnTab(onTabConfig),
    blockStyleFn,
  }
}

export default checkableListPlugin
