import React, { Component } from 'react';
// import api from '../../api';

export default class TempStock extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        };
    }

  
    render() {
        return (
            <tr>
                <th scope="row">{this.props.name}</th>
                <td>{this.props.open}</td>
                <td>{this.props.closed}</td>
                <td>
                    <button onClick={()=>this.props.delete(this.props.name)} >Remove</button>
                </td>
            </tr>
        );
    }
}