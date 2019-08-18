import React, {Component} from 'react';

class Portfolio extends Component{
    render(){
        return(
            <section id="portfolio" className="portfolio">
                <div className="portfolio-filter row">
                    <div data-filter=".finance" className="cbp-filter-item">Finance</div>
                    <div data-filter=".tech" className="cbp-filter-item">Tech</div>
                    <div data-filter=".education" className="cbp-filter-item">Education</div>
                    <div data-filter="*" className="cbp-filter-item cbp-filter-item-active">All</div>
                </div>
                {console.log(this.props)}
                <div id="grid-container">
                    {this.props.portfolio.map((item, idx) =>
                        item.href ?
                        <div key={idx} className={`cbp-item ${item.classname}`}>
                            <a href={item.href}>
                                <figure className="fig">
                                    <img src={require(`../${item.img}`)} alt=""/>
                                    <figcaption>
                                        <h3>{item.caption1}</h3>
                                        <p>{item.caption2}</p>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                        :
                        <div key={idx} className={`cbp-item ${item.classname}`}>
                            <figure className="fig">
                                <img src={require(`../${item.img}`)} alt=""/>
                                <figcaption>
                                    <h3>{item.caption1}</h3>
                                    <p>{item.caption2}</p>
                                </figcaption>
                            </figure>
                        </div>
                    )}
                </div>

                {/*
                <div id="port-loadMore" className="cbp-l-loadMore-button top_120 bottom_90">
                <a href="port.html" className="cbp-l-loadMore-link site-btn" rel="nofollow">
                    <span className="cbp-l-loadMore-defaultText">Load More (<span className="cbp-l-loadMore-loadItems">2</span>)</span>
                    <span className="cbp-l-loadMore-loadingText">Loading...</span>
                    <span className="cbp-l-loadMore-noMoreLoading">No More Works</span>
                </a>
                </div>
                */}
            </section>
        )
    }
}
export default Portfolio;