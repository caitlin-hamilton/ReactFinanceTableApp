import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ASSET_CLASS_COLOURS } from './config';

const InputRow = (props) => {
        return(
            <tr>
                <td width="25%" white-space="nowrap" class={ASSET_CLASS_COLOURS[props.assetClass]}>{props.assetClass}</td>
                <td width="25%" white-space="nowrap" class= {props.price >=0 ? "p-3 mb-2 bg-info text-white" : "p-3 mb-2 bg-danger text-white"}>{props.price}</td>
                <td width="25%" white-space="nowrap"> {props.ticker}</td>
            </tr>

        )
    }
export default InputRow;

