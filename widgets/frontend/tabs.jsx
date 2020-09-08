import React from "react";

class Tabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            tab_index: 0,
            active: false
        }
        this.tabSelect = this.tabSelect.bind(this);
    }

    tabSelect(index) {
        // debugger
        this.setState({ tab_index: index, active: true });
    }

    render(){
        // debugger
        return(<>
                <h1>Tabs</h1>
                <div className="tabs">
                    <ul className="tab-header">
                        {this.props.tabs.map((prop, index) => { 
                            return (<li onClick={this.tabSelect.bind(this, index)} className={this.state.tab_index === index ? "active" : ""} key={index}>
                                <h3>{prop.title}</h3>
                            </li>)
                        })}
                    </ul>
                    <div className="tab-content"><p>{this.props.tabs[this.state.tab_index].content}</p></div>
                </div>
            </>
        )
    }
}

export default Tabs;