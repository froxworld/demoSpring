import React from 'react';
import './App.css';
import 'typeface-roboto';
import HeaderLeft from "./component/HeaderLeft";
import BodyLeft from "./component/BodyLeft";
import FloatingActionButtons from "./component/climb";
import ContainedButtons from "./component/ContainedButtons";
import ButtonMenu from "./component/ButtonMenu";
import Climber from "./component/Climber";



function App() {

    return (
        <div>
            <header>
                <ButtonMenu/>
                <HeaderLeft/>

            </header>
            <footer>
                <FloatingActionButtons/>
                <BodyLeft/>
                <Climber/>
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