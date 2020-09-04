import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ASSET_CLASS_COLOURS } from './config';

export default class InputRow extends React.Component {

    render(){
        return(
            <tr>
                <td width="25%" white-space="nowrap" class={ASSET_CLASS_COLOURS[this.props.assetClass]}>{this.props.assetClass}</td>
                <td width="25%" white-space="nowrap" class= {this.props.price >=0 ? "p-3 mb-2 bg-info text-white" : "p-3 mb-2 bg-danger text-white"}>{this.props.price}</td>
                <td width="25%" white-space="nowrap"> {this.props.ticker}</td>
            </tr>

        )
    }
}