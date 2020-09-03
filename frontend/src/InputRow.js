import React from 'react';
import './App.css';

export default class InputRow extends React.Component {

    render(){
        return(
            <tr>
                <td className={this.props.assetClass}>{this.props.assetClass}</td>
                <td className= {this.props.price >=0 ? "PositivePrice" : "NegativePrice"}>{this.props.price}</td>
                <td>{this.props.ticker}</td>
            </tr>

        )
    }
}