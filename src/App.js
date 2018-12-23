import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Header from 'components/Header'

import './App.scss'

type Props = {
  isLoading: boolean,
  children: React.DOM,
}

class App extends Component<Props> {
  state = {
    isLoading: true,
  }

  render() {
    const { children } = this.props

    return (
      <div className="App">
        <Header />
        {children}
      </div>
    )
  }
}

export default App
