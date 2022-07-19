/*
 * Copyright © 2021-present Mia s.r.l.
 * All rights reserved
 *
 * Mia-Platform uses Open Source Software.
 * Copyright notice are available at https://docs.mia-platform.eu/info/oss/.
 */

import React from 'react'
import {render, screen} from '@testing-library/react'

import {RapiDocSpecEnricher} from './RapidocSpecEnricher'

describe('RapiDocSpecEnricher tests', () => {
  it('Test LoadingPage renders', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({})
      })
    )
    window.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: () => null,
      disconnect: () => null
    }))
    render(<RapiDocSpecEnricher openApiSpecUrl={'test.com'} />)
    expect(screen.getAllByTestId('svgContainer')).toBeTruthy()
  })
})
