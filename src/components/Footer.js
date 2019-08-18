import React, {Component} from 'react';

class Partners extends Component{
    render(){
        return(
            <footer>
                <div className="cont">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12 copyright">
                            <img src={require(`../${this.props.logo}`)} alt="logo" width="100"/>
                            <p>{this.props.footer.title}</p>
                        </div>
                        <div className="col-md-4 d-sm-none d-md-block">
                            <div className="social">
                                {this.props.contact.social.map((item, key) =>
                                    <a key={key} href={item.href}>
                                        <i className={`fab ${item.icon}`}/> 
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12 d-none d-sm-block getintouch">
                            <a href={`mailto:${this.props.contact.email}`}>
                                <strong>Contact Us</strong>
                                <br/>
                                <p>{this.props.contact.email}</p>
                            </a>
                            <a href={this.props.footer.subscription}>
                                <p>Subscribe to Newsletter</p>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Partners;






