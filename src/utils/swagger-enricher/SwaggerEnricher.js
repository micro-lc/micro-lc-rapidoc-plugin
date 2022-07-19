/*
 * Copyright © 2021-present Mia s.r.l.
 * All rights reserved
 *
 * Mia-Platform uses Open Source Software.
 * Copyright notice are available at https://docs.mia-platform.eu/info/oss/.
 */

import {JSONPath} from 'jsonpath-plus'

export const enrichTags = (apiSpec) => {
  const allTags = JSONPath({path: '$..paths..tags[*]', json: apiSpec})
  const uniqueTags = new Set(allTags)
  apiSpec.tags = Array.from(uniqueTags).map(tagName => ({name: tagName}))
}

export const enrichTagsVendorPrefix = (apiSpec, {prefixValue, prefixName}) => {
  apiSpec.tags.forEach(tag => {
    tag[prefixName] = prefixValue
  })
}
