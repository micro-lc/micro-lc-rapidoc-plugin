/*
 * Copyright © 2021-present Mia s.r.l.
 * All rights reserved
 *
 * Mia-Platform uses Open Source Software.
 * Copyright notice are available at https://docs.mia-platform.eu/info/oss/.
 */

import PropTypes from 'prop-types'
import React, {useEffect, useState} from 'react'
import {LoadingAnimation, PlaceholdersPage} from '@mia-platform/microlc-ui-components'

import RapiDocContainer from '../rapidoc-container/RapiDocContainer'
import {enrichTags, enrichTagsVendorPrefix} from '../../utils/swagger-enricher/SwaggerEnricher'

import './RapiDocSpecEnricher.css'

export const RapiDocSpecEnricher = ({openApiSpecUrl}) => {
  const [enricherState, setEnricherState] = useState({specContent: '', retrieveError: false, loading: true})

  useEffect(() => {
    fetch(openApiSpecUrl)
      .then(response => response.json())
      .then(apiSpec => {
        enrichTags(apiSpec)
        enrichTagsVendorPrefix(apiSpec, {prefixValue: false, prefixName: 'x-tag-expanded'})
        setEnricherState({specContent: apiSpec, retrieveError: false, loading: false})
      })
      .catch(() => setEnricherState({specContent: '', retrieveError: true, loading: false}))
  }, [openApiSpecUrl])

  return (
    <>
        {enricherState.retrieveError && <RapiDocRetrieveError/>}
        {enricherState.loading && <LoadingAnimation/>}
        {enricherState.specContent && <RapiDocContainer apiSpec={enricherState.specContent}/>}
    </>
  )
}

RapiDocSpecEnricher.propTypes = {
  openApiSpecUrl: PropTypes.string
}

const RapiDocRetrieveError = () => {
  return (
    <div className='rapiDocRetrieveError'>
        <PlaceholdersPage.Error500/>
    </div>
  )
}
