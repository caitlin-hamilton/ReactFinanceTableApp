import React from 'react';

export default class InputRow extends React.Component {

    render(){
        return(
            <tr>
                <td>{this.props.assetClass}</td>
                <td>{this.props.price}</td>
                <td>{this.props.ticker}</td>
            </tr>

        )
    }
}