import React, { Component } from 'react';


class Dropdown extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
               <select value={this.props.property} onChange={this.props.eventHandler} class="browser-default custom-select" name={this.props.name} id={this.props.id}>
                        {this.props.items.map((item, index) => {
                                    return (
                                                <option key={index} selected value={item}>{item}</option>
                                    )
                            })}
                </select>

            </div>
        )
    }
}


export default Dropdown;