/* @flow */

import decorateComponentWithProps from 'decorate-component-with-props'
import createBlockRendererFn from './createBlockRendererFn'
import defaultBlockRenderMap, { blockRenderMapForSameWrapperAsUnorderedListItem } from './blockRenderMap'
import CheckableListItem from './CheckableListItem'
import onTab from './onTab'
import blockStyleFn from './blockStyleFn'
import isNil from './utils/isNil'

const checkableListPlugin = (config: Object = {}): Object => {
  const theme = config.theme ? config.theme : {}
  const disabled = !isNil(config.disabled) ? !!config.disabled : false
  const blockRenderMap = !!config.sameWrapperAsUnorderedListItem ?
    blockRenderMapForSameWrapperAsUnorderedListItem :
    defaultBlockRenderMap
  const checkableListItemProps = {
    theme,
    disabled
  }
  const blockRendererConfig = {
    CheckableListItem: decorateComponentWithProps(CheckableListItem, checkableListItemProps),
    ...config,
  }
  return {
    blockRendererFn: createBlockRendererFn(blockRendererConfig),
    blockRenderMap,
    onTab,
    blockStyleFn,
  }
}

export default checkableListPlugin
