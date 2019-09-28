import React from 'react'
import logo from '../picture/logo.svg'

class HeaderCenter extends React.Component{

    handleEvent = event => {
        alert("I was clicked");
    };

    render() {
        return  (
            <table>
                <tbody>
                <tr className="left">
                    <td>milieu</td>
                </tr>
                </tbody>
            </table>
        )
    }
}
export default HeaderCenter;