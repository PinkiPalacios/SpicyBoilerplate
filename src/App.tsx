import * as React from 'react'
import './App.css'

import logo from './logo.svg'

class App extends React.Component {
  public render() {
    const a = this._test('ohurewfwiurefhjwek')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React </h1>
        </header>
        <p className="App-intro">
          Toregwr get started, edit <code>src/App.tsx</code> and save to {a}
          relergergoad.
        </p>
      </div>
    )
  }
  private _test = (jojo: string) => {
    return jojo
  }
}

export default App
