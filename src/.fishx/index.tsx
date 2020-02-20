import React, { Fragment } from 'react'
import Fishx from '@fishx/core'
import userConfig from './config/config'
import App from './App'

import routes from './config/router.config'
import { Router, renderRoutes, createHashHistory } from '@fishx/router'

import './global.css'

// init entry
;(async () => {
  Fishx.updateConfig({ app: App, ...userConfig })

  Fishx.updateConfig({ routes })
  Fishx.updateHistory(createHashHistory())

  const Wrapper = Fishx.config.app ? Fishx.config.app : Fragment

  const element = (
    <Fragment>
      <Router history={Fishx.history}>
        <Wrapper>{renderRoutes(routes)}</Wrapper>
      </Router>
    </Fragment>
  )

  if (Fishx.config.integrate && Fishx.config.integrate.name) {
    ;(window as any)[Fishx.config.integrate.name] = {}
    ;(window as any)[Fishx.config.integrate.name].render = function(
      selector: string,
      cbprops?: any,
    ) {
      Fishx.updateConfig({ cbprops })
      Fishx.integrate(element)(selector)

      if (cbprops && Fishx.history) {
        window.setTimeout(function() {
          Fishx.history.push(cbprops)
        }, 0)

        ;(window as any)[Fishx.config.integrate.name].push = function(target) {
          Fishx.history.push(target)
        }
      }
    }
  } else {
    Fishx.bootstrap(element)
  }
  ;(window as any).Fishx = Fishx
})()
