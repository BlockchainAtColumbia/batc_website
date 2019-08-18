import React, {Component} from 'react';
import Particles from './particles';

class Home extends Component{
    render(){
        return(
            <section className="home">

            <Particles />
            
            <div className="home-content">
                <h1 className="hero-title">{this.props.home.title1}
                    <br />
                    <span>{this.props.home.title2}</span>
                </h1>
                <p className="top_45">{this.props.home.subtitle}
                    <br />
                    <span 
                        className="element" 
                        data-text1={this.props.home.typingtext[0]} 
                        data-text2={this.props.home.typingtext[1]} 
                        data-text3={this.props.home.typingtext[2]} 
                        data-loop="true" data-backdelay="1500">
                    </span>
                </p>
                <div className="social">
                    <a className="text" href="/">social</a>
                    <div className="line"></div>
                    {this.props.social.map((item, key) =>
                        <a key={key} href={item.href}>
                            <i className={`fab ${item.icon}`}/> 
                        </a>
                    )}
                </div>
            </div>
        </section>
        )
    }
}
export default Home;