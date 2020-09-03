import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ASSET_CLASS_COLOURS = {Entity: "p-3 mb-2 bg-info text-white", Credit: "p-3 mb-2 bg-success text-white", Macro: "p-3 mb-2 bg-white text-dark"}

export default class InputRow extends React.Component {

    render(){
        return(
            <tr>
                <td class={ASSET_CLASS_COLOURS[this.props.assetClass]}>{this.props.assetClass}</td>
                <td class= {this.props.price >=0 ? "p-3 mb-2 bg-info text-white" : "p-3 mb-2 bg-danger text-white"}>{this.props.price}</td>
                <td>{this.props.ticker}</td>
            </tr>

        )
    }
}