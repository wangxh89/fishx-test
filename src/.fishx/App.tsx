import React, { Fragment } from 'react'

export default class App extends React.Component {
  render() {
    return <Fragment>{this.props.children}</Fragment>
  }
}
