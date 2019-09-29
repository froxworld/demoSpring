import React from 'react';
import './App.css';
import 'typeface-roboto';
import HeaderLeft from "./component/header/HeaderLeft";
import BodyLeft from "./component/forTest/BodyLeft";
import FloatingActionButtons from "./component/forTest/climb";
import ContainedButtons from "./component/forTest/ContainedButtons";
import HeaderCenter from "./component/header/HeaderCenter";
import Climber from "./component/forTest/Climber";
import Route from "./component/mainContent/Route";



function App() {

    return (
        <div>
            <header>
                <HeaderLeft/>

            </header>
            <footer>
                {/*<FloatingActionButtons/>*/}
                {/*<BodyLeft/>*/}
                <Route/>
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