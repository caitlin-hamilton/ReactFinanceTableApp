import React from 'react';
import InputRow from './InputRow'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ASSET_CLASS_SORT_ORDER, SORT_ARROW} from './config';

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

    getArrowLogic = (attribute, direction) => {
      let localArrowLogic = {... this.state.arrowLogic}
      Object.keys(localArrowLogic).forEach(v => localArrowLogic[v] = false)
      localArrowLogic[attribute] = direction;
      return localArrowLogic;
    }

    sortAttributeDescendingOrder = (attribute) => {
      let data = [].concat(this.state.inputData).sort((a, b) => a[attribute] >= b[attribute] ? 1 : -1)
      this.setState({
          inputData: data,
          arrowLogic: this.getArrowLogic(attribute, "DOWN"),
      })
    }

    sortAttributeAscendingOrder = (attribute) => {
      let data = [].concat(this.state.inputData).sort((a, b) => a[attribute] < b[attribute] ? 1 : -1)
      this.setState({
          inputData: data,
          arrowLogic: this.getArrowLogic(attribute, "UP"),
      })

    }

    sortAssetClassDescendingOrder = (attribute) => {
      let data = [].concat(this.state.inputData).sort((a, b) => ASSET_CLASS_SORT_ORDER[a.assetClass] - ASSET_CLASS_SORT_ORDER[b.assetClass])
      this.setState({
        inputData: data,
        arrowLogic: this.getArrowLogic(attribute, "DOWN"),
      })
    }

    sortAssetClassAscendingOrder = (attribute) => {
      let data = [].concat(this.state.inputData).sort((a, b) => ASSET_CLASS_SORT_ORDER[b.assetClass] - ASSET_CLASS_SORT_ORDER[a.assetClass])
      this.setState({
        inputData: data,
        arrowLogic: this.getArrowLogic(attribute, "UP"),
      })
    }

    sortAttribute = (attribute) => {
      if ((!this.state.arrowLogic[attribute]) || this.state.arrowLogic[attribute] === "UP"){
        if( attribute == 'assetClass'){
          this.sortAssetClassDescendingOrder(attribute)
        }
        else {
          this.sortAttributeDescendingOrder(attribute)}
        }
      else if (this.state.arrowLogic[attribute] === "DOWN"){
        if(attribute == 'assetClass'){
          this.sortAssetClassAscendingOrder(attribute)
        }
        else {
          this.sortAttributeAscendingOrder(attribute)
        }
      }
    }


    render() {
        return(
          <div>
            <div >
              <div >
                <table class="table table-bordered">
                    <tr>
                      <th onClick={() => {this.sortAttribute('assetClass')}}> Asset Class {SORT_ARROW[this.state.arrowLogic['assetClass']]}</th>
                      <th onClick={() => {this.sortAttribute('price')}}>Price {SORT_ARROW[this.state.arrowLogic['price']]}</th>
                      <th onClick={() => {this.sortAttribute('ticker')}}>Ticker {SORT_ARROW[this.state.arrowLogic['ticker']]}</th>
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