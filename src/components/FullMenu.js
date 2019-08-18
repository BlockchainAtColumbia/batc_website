import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <div className="full-menu">
                <div className="full-inner row">
                    <nav className="col-md-8">
                        <ul>
                            {this.props.menulinks.map((item, key) => 
                                <li key={key}>
                                    <a href={item.href}>{item.name}</a>
                                </li>
                            )}
                        </ul>
                    </nav>
                    <div className="col-md-4 full-contact">
                        <ul>
                            <li className="title">Contact Us</li>
                            <li>{this.props.contact.email}</li>
                            <li>
                                <div className="social">
                                    {this.props.contact.social.map((item, key) =>
                                        <a key={key} href={item.href}>
                                            <i className={`fab ${item.icon}`}/> 
                                        </a>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};
export default Header;