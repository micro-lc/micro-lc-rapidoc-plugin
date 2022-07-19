/*
*Copyright © 2022-present Mia s.r.l.
*All rights reserved

*Mia-Platform uses Open Source Software.
*Copyright notice are available at https://docs.mia-platform.eu/info/oss/.
*/

import './public-path'
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import {RapiDocSpecEnricher} from './components/rapidoc-spec-enricher/RapidocSpecEnricher'

const containerSelector = '#microlc_rapidoc_plugin'

function retrieveContainer (props) {
  const {container} = props
  return container ? container.querySelector(containerSelector) : document.querySelector(containerSelector)
}

function render (props) {
  ReactDOM.render(<RapiDocSpecEnricher activeRule={props.activeRule} openApiSpecUrl={props.openApiSpecUrl}/>, retrieveContainer(props))
}

export async function mount (props) {
  render(props)
}

export async function unmount (props) {
  ReactDOM.unmountComponentAtNode(retrieveContainer(props))
}

export async function bootstrap () {

}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
