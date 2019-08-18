import React, {Component} from 'react';
import logo from '../images/logo/full-tp.png';


class Header extends Component{
    render(){
        return(
            <header>
                <a href="/">
                    <img src={logo} alt="Logo" width="200" draggable="false" />
                </a>
                <div className="nav-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
        );
    }
}
export default Header;