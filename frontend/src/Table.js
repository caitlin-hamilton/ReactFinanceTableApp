import React from 'react';
import InputRow from './InputRow'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ArrowUp, ArrowDown } from 'react-bootstrap-icons';
import {ASSET_CLASS_SORT_ORDER} from './config';

class Table extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          inputData: [],
          arrowLogic: {
            assetClass: false,
            price: false,
            ticker: false,
          }
        };
      }

      componentDidMount(){
          this.setState({
              inputData: this.props.getTableData()
          })
      }

      getArrowLogic = (attribute) => {
        let localArrowLogic = {... this.state.arrowLogic}
        Object.keys(localArrowLogic).forEach(v => localArrowLogic[v] = false)
        localArrowLogic[attribute] = true;
        return localArrowLogic;
      }

      sortDescendingOrder = (attribute) => {
        let data = [].concat(this.state.inputData).sort((a, b) => a[attribute] >= b[attribute] ? 1 : -1)

        this.setState({
            inputData: data,
            arrowLogic: this.getArrowLogic(attribute),
        })
      }

      sortAscendingOrder = (attribute) => {
        let data = [].concat(this.state.inputData).sort((a, b) => a[attribute] < b[attribute] ? 1 : -1)
        this.setState({
            inputData: data,
            arrowLogic: this.getArrowLogic(attribute),
        })

      }
      sortByAssetClass = (attribute) => {
        let data = [].concat(this.state.inputData).sort((a, b) => ASSET_CLASS_SORT_ORDER[a.assetClass] - ASSET_CLASS_SORT_ORDER[b.assetClass])
        this.setState({
          inputData: data,
          arrowLogic: this.getArrowLogic(attribute),
      })
    }

    render() {
        return(
          <div>
            <div >
              <div >
                <table class="table table-bordered" >
                    <tr>
                        <th onClick={() => {this.sortByAssetClass('assetClass')}}> Asset Class {this.state.arrowLogic['assetClass'] ? <ArrowDown/> : null}</th>
                        <th onClick={() => {this.sortAscendingOrder('price')}}>Price {this.state.arrowLogic['price'] ? <ArrowUp />: null}</th>
                        <th onClick={() => {this.sortDescendingOrder('ticker')}}>Ticker {this.state.arrowLogic['ticker'] ? <ArrowDown />: null }</th>
                    </tr>
                   <tbody>
                   {this.state.inputData.map((item, index) => <InputRow assetClass={item.assetClass} price={item.price} ticker={item.ticker} key={index}/>)}
                   </tbody>
                 </table>
              </div>
            </div>
          </div>
        )
      }
    }
export default Table;