import React from 'react';
import './App.css';
import 'typeface-roboto';
// Pour material-ui
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Box from '@material-ui/core/Box';
import logo from './picture/logo.svg'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p><img src={logo} className="App-logo" alt="climbing Zone logo"/></p>
        <p><Icon>star</Icon></p>
        <table>
          <tr>
            <td>
              <IconButton aria-label="delete">
                <Box
                    color="primary.main"
                    bgcolor="background.paper"
                    fontFamily="h6.fontFamily"
                    fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
                    p={{ xs: 2, sm: 3, md: 4 }}
                >
                  @material-ui/system
                </Box>
              </IconButton>
            </td>
          </tr>
        </table>
      </header>
      <body>

      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;


// render() {
//     return (
//       <div>
//         <div className="App">
//           <header className="App-header">
//             <table>
//               <tbody>
//            <div>
//               <ButtonToolbar>
//                 <Button variant="dark" size="lg" className="menu-button ">
//                   <Image className="menu-button" src="login.jpg"></Image>
//                 </Button>
//                 {Climber}
//                 <Button variant="dark" size="lg" className="menu-button ">
//                   <Image src="grimpeur.jpg"></Image>
//                 </Button>
//                 <Button variant="dark" size="lg" className="menu-button ">
//                   <Image src="montagne.png"></Image>
//                 </Button>
//                 <Button variant="dark" size="lg">
//                   <Image  src="parametre.png" ></Image>
//                 </Button>
//                 <Button variant="dark" size="lg">
//                   <Image className="menu-button " src="reussite.png" ></Image>
//                 </Button>
//                 <Button variant="dark" size="lg">
//                   <Image className="menu-button " src="time.png" ></Image>
//                 </Button>
//               </ButtonToolbar>
//             </div>
//               </tbody>
//             </table>
//           </header>
//         </div>
//         <div className="wrapper">
//           <div className="one">{list1}</div>
//           <div className="two"><User name="toto"/></div>
//           <div>
//             <div className="titreFriends">Friends</div>
//             <div className="three">
//               <ul>{climbers}</ul>
//             </div>
//           </div>
//           <div className="four"><Card id="1" card="une" feedback="name"/>
//             <div className="five">Five</div>
//             <div className="six">Six</div>
//           </div>
//           <div>
//             <footer className="footer"><Footer name="Francois auxietre"/><Footer name="2019 TM"/></footer>
//           </div>
//         </div>
//
//       </div>
//     )
//   }
//  }