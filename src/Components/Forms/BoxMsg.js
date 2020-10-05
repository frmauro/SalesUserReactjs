import React, { Component } from 'react';

class BoxMsg extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.isSuccessOpened && 
                    <div class="alert alert-success" role="alert">
                        {this.props.message}
                    </div> 
                }
                {this.props.isDangerOpened && 
                    <div class="alert alert-danger" role="alert">
                        {this.props.message}
                    </div> 
                }
            </div>
        )
    }
}

export default BoxMsg;


