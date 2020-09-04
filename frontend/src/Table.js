import React from 'react';
import InputRow from './InputRow'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ArrowUp, ArrowDown } from 'react-bootstrap-icons';
import {ASSET_CLASS_SORT_ORDER} from './config';
import {getTableData} from './api';

class Table extends React.Component {

    constructor(props){
        super(props);
        this.state = {inputData: []}
      }

      componentDidMount(){
          this.setState({
              inputData: getTableData()
          })
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
                <table class="table table-bordered" >
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