import * as React from 'react'
import './App.css'

import logo from './logo.svg'

class App extends React.Component {
  public render() {
    console.log('proccess', process)
    const a = { b: 239462783567384 }
    const { b } = a
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.test()} </h1>
        </header>
        {b}
        <p className="App-intro">{process.env.REACT_APP_TEST_ENV}</p>
      </div>
    )
  }
  public test = () => 'wasjnkjrfew'
}

export default App
