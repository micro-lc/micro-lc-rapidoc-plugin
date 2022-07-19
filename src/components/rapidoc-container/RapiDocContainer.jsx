/*
 * Copyright © 2021-present Mia s.r.l.
 * All rights reserved
 *
 * Mia-Platform uses Open Source Software.
 * Copyright notice are available at https://docs.mia-platform.eu/info/oss/.
 */

import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import 'rapidoc'
import {LoadingAnimation} from '@mia-platform/microlc-ui-components'

import './RapiDocContainer.css'

const RAPIDOC_LOADED_EVENT = 'spec-loaded'

export const RapiDocContainer = ({apiSpec}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const rapidocElement = document.querySelector('rapi-doc')
    const loadedEventHandler = () => setIsLoaded(true)
    rapidocElement.addEventListener(RAPIDOC_LOADED_EVENT, loadedEventHandler)
    rapidocElement.loadSpec(apiSpec)
    return () => rapidocElement.removeEventListener(RAPIDOC_LOADED_EVENT, loadedEventHandler)
  }, [apiSpec])

  return (
    <>
        {!isLoaded && <LoadingAnimation/>}
        <div className='rapidoc_container'>
            <rapi-doc
                allow-spec-file-load="false"
                allow-spec-url-load="false"
                fill-request-fields-with-example="false"
                load-fonts="false"
                render-style="focused"
                show-header="false"
            />
        </div>
    </>
  )
}

RapiDocContainer.propTypes = {
  apiSpec: PropTypes.object.isRequired
}

export default RapiDocContainer
