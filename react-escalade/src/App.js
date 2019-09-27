import React, { Component } from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

import Button from 'react-bootstrap/Button'
import logo from './logo.svg'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <table>
            <tr>
              <td><h1 className="App-title">Climbing Zone</h1></td>
              <td><img src={logo} className="App-logo" alt="climbing Zone logo"/></td>
              <td>
                <div>
                  <ButtonToolbar>
                    <Button variant="primary" size="lg">
                      Large button
                    </Button>
                    <Button variant="secondary" size="lg">
                      Large button
                    </Button>
                  </ButtonToolbar>
                </div>
              </td>
            </tr>
          </table>
        </header>
      </div>

        )
        }
        }

        export default App
