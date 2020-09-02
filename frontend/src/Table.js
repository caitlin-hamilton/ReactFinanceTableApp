import React from 'react';
import InputRow from './InputRow'

const ASSET_CLASS_SORT_ORDER = {'Entity': 0, 'Macro': 1 ,'Credit': 2}

class Table extends React.Component {
    //todo found a bug- if you click button on already sorted list, but two values are equal, it will switch around on UI.

    constructor(props){
        super(props);
        this.state = {inputData: props.inputRows}
        console.log(this.state.inputData)
      }

    sortByPrice = () => {
        const data = [].concat(this.state.inputData).sort((a, b) => a.price > b.price ? 1 : -1);
        this.setState({
            inputData: data
        })
      }

      sortByTicker =() => {
          let data = [].concat(this.state.inputData).sort((a, b) => a.ticker > b.ticker ? 1 : -1)
          this.setState({
            inputData: data
        })

      }
      sortByAssetClass =() => {
        let data = [].concat(this.state.inputData).sort((a, b) => ASSET_CLASS_SORT_ORDER[a.assetClass] - ASSET_CLASS_SORT_ORDER[b.assetClass])
        this.setState({
          inputData: data
      })

    }

    render(){
        return(
          <div>
            <div >
              <div >
                <table >
                    <tr>
                        <th>Asset Class</th>
                        <th>Price</th>
                        <th>Ticker</th>
                    </tr>
                   <tbody>
                   {this.state.inputData.map(item => <InputRow assetClass={item.assetClass} price={item.price} ticker={item.ticker}/>)}
                   </tbody>
                 </table>
                 <button onClick={() => {this.sortByAssetClass()}}>Sort Asset Class</button>
                 <button onClick={() => {this.sortByPrice()}}>Sort Price</button>
                 <button onClick={() => {this.sortByTicker()}}>Sort Ticker</button>
              </div>
            </div>
          </div>
        )
      }
    }

export default Table;