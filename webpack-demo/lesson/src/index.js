import React, { Component } from 'react';
import ReactDom from 'react-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
