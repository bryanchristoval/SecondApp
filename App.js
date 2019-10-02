import React, { Component } from 'react';
import material from './native-base-theme/variables/material'
import getTheme from './native-base-theme/components'
import RouterFlux from './src/router/RouterFlux'
import StyleProvider from 'native-base'

class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
          <RouterFlux />
      </StyleProvider>
    )
  }
}

export default App;
