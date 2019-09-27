import React, { Component } from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import logo from './logo.svg'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <table>
            <tbody>
            <tr>
              <td><h1 className="App-title">Climbing Zone</h1></td>
              <td><img src={logo} className="App-logo" alt="climbing Zone logo"/></td>
              <td>
                <div>
                  <ButtonToolbar>
                    <Button variant="dark" size="lg">
                      <Image className="menu-button "    src="login.jpg" rounded></Image>
                    </Button>
                    <Button variant="dark" size="lg">
                      <Image className="menu-button "    src="grimpeur.jpg" rounded></Image>
                    </Button>
                    <Button variant="dark" size="lg">
                      <Image className="menu-button "    src="montagne.png" rounded></Image>
                    </Button>
                    <Button variant="dark" size="lg">
                      <Image className="menu-button "    src="parametre.png" rounded></Image>
                    </Button>
                    <Button variant="dark" size="lg">
                      <Image className="menu-button "    src="reussite.png" rounded></Image>
                    </Button>
                    <Button variant="dark" size="lg">
                    <Image className="menu-button "    src="time.png" rounded></Image>
                  </Button>
                  </ButtonToolbar>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </header>
      </div>

        )
        }
        }

        export default App
