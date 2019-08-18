
import React, {Component} from 'react';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
const images = importAll(require.context('../images/partners', false, /\.(png|jpe?g|svg)$/));

class Partners extends Component{
    render(){
        return(
            <section className="about">
                <h1 align="center"><b>Partners</b></h1>
                <div className="clients">
                    <div className="row">
                        {this.props.partners.map((partner, idx)=>
                            <div className="col-md-3 col-sm-6 client">
                                <figure>
                                    <a href={partner.href}>
                                        <img src={images[partner.img]} alt={partner.title}/>
                                    </a>
                                </figure>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        )
    }
}
export default Partners;