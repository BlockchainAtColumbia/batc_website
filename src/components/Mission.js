import React, {Component} from 'react';

class Mission extends Component{
    render(){
        return(
            <div className="mission-statement top_90">
                <ul className="card-deck" style={{textAlign: "center"}}><a href={this.props.mission.button.href} style={{textDecoration: "none", color:"white"}}>
                    <div className="card" style={{maxWidth: "600px", textAlign: "center", backgroundColor: "#AEDDED", borderColor: "#AEDDED", marginBottom: "10px"}}>
                        <div style={{padding:"20px", marginRight:"40px", marginLeft:"40px", fontSize:"22r px"}}>{this.props.mission.button.text}</div>
                    </div></a>
                </ul>
                {this.props.mission.paragraphs.map((paragraph, idx)=>
                    <h5 
                        key={idx} 
                        style={{fontSize:"18px", fontWeight: "normal"}} 
                        dangerouslySetInnerHTML={{__html: paragraph + `<br/><br/><br/>`}}>
                    </h5>
                )}<br/>
                <div className="grey-line"></div>
            </div>
        )
    }
}
export default Mission;