import React from 'react';
import InputRow from './InputRow'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowUp, ArrowDown,   } from 'react-bootstrap-icons';

const ASSET_CLASS_SORT_ORDER = {'Equities': 0, 'Macro': 1 ,'Credit': 2}

class Table extends React.Component {

    constructor(props){
        super(props);
        this.state = {inputData: props.inputRows}
      }

      sortDescendingOrder = (attribute) => {
        let data = [].concat(this.state.inputData).sort((a, b) => a[attribute] >= b[attribute] ? 1 : -1)
        this.setState({
            inputData: data
        })

      }

      sortAscendingOrder = (attribute) => {
        let data = [].concat(this.state.inputData).sort((a, b) => a[attribute] < b[attribute] ? 1 : -1)
        this.setState({
            inputData: data
        })

      }
      sortByAssetClass = () => {
        let data = [].concat(this.state.inputData).sort((a, b) => ASSET_CLASS_SORT_ORDER[a.assetClass] - ASSET_CLASS_SORT_ORDER[b.assetClass])
        this.setState({
          inputData: data
      })

    }

    render() {
        return(
          <div>
            <div >
              <div >
                <table class="table">
                    <tr>
                        <th onClick={() => {this.sortByAssetClass()}} >Asset Class <ArrowDown /></th>
                        <th onClick={() => {this.sortAscendingOrder('price')}}>Price <ArrowUp /></th>
                        <th onClick={() => {this.sortDescendingOrder('ticker')}}>Ticker <ArrowDown /></th>
                    </tr>
                   <tbody>
                   {this.state.inputData.map(item => <InputRow assetClass={item.assetClass} price={item.price} ticker={item.ticker}/>)}
                   </tbody>
                 </table>
              </div>
            </div>
          </div>
        )
      }
    }
export default Table;