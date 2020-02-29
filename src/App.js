import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <HelloWorld />
        <Footer />
      </>
    )
  }
}

export default App
