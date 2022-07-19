/*
 * Copyright © 2022-present Mia s.r.l.
 * All rights reserved
 *
 * Mia-Platform uses Open Source Software.
 * Copyright notice are available at https://docs.mia-platform.eu/info/oss/.
 */

import fs from 'fs'
import path from 'path'

import {enrichTags, enrichTagsVendorPrefix} from './SwaggerEnricher'

const loadJson = (fileName) => JSON.parse(fs.readFileSync(path.resolve(__dirname, fileName), 'utf-8'))

describe('Swagger enricher tests', () => {
  it('enrichTags test with complex open api spec', () => {
    const complexOpenApi = loadJson('complexOpenApi.json')
    expect(complexOpenApi.tags).toStrictEqual([])
    enrichTags(complexOpenApi)
    expect(complexOpenApi.tags).toStrictEqual([
      {name: 'Files'},
      {name: 'Riders'},
      {name: 'Dishes'},
      {name: 'Orders'},
      {name: 'Orders Pending'},
      {name: 'Orders Preparing'},
      {name: 'Orders Delivered'},
      {name: 'Orders Aborted'},
      {name: 'Ingredients'},
      {name: 'Cmsmenu'},
      {name: 'Customers'},
      {name: 'Provinces'},
      {name: 'Messages'},
      {name: 'Status'},
      {name: 'Menu'}
    ])
  })

  it('enrichTags test with empty open api spec', () => {
    const emptyOpenApi = loadJson('emptyOpenApi.json')
    expect(emptyOpenApi.tags).toStrictEqual([])
    enrichTags(emptyOpenApi)
    expect(emptyOpenApi.tags).toStrictEqual([])
  })

  it('enrichTagVendorPrefix for complex open api spec', () => {
    const complexOpenApi = loadJson('complexOpenApi.json')
    enrichTags(complexOpenApi)
    enrichTagsVendorPrefix(complexOpenApi, {prefixValue: false, prefixName: 'x-tag-expanded'})
    expect(complexOpenApi.tags).toStrictEqual([
      {name: 'Files', 'x-tag-expanded': false},
      {name: 'Riders', 'x-tag-expanded': false},
      {name: 'Dishes', 'x-tag-expanded': false},
      {name: 'Orders', 'x-tag-expanded': false},
      {name: 'Orders Pending', 'x-tag-expanded': false},
      {name: 'Orders Preparing', 'x-tag-expanded': false},
      {name: 'Orders Delivered', 'x-tag-expanded': false},
      {name: 'Orders Aborted', 'x-tag-expanded': false},
      {name: 'Ingredients', 'x-tag-expanded': false},
      {name: 'Cmsmenu', 'x-tag-expanded': false},
      {name: 'Customers', 'x-tag-expanded': false},
      {name: 'Provinces', 'x-tag-expanded': false},
      {name: 'Messages', 'x-tag-expanded': false},
      {name: 'Status', 'x-tag-expanded': false},
      {name: 'Menu', 'x-tag-expanded': false}
    ])
  })

  it('enrichTagVendorPrefix test with empty open api spec', () => {
    const emptyOpenApi = loadJson('emptyOpenApi.json')
    enrichTags(emptyOpenApi)
    enrichTagsVendorPrefix(emptyOpenApi, {prefixValue: false, prefixName: 'x-tag-expanded'})
    expect(emptyOpenApi.tags).toStrictEqual([])
  })
})
