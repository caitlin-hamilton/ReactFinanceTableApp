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
        this.sortByAssetClassAscendingOrder = this.sortByAssetClassAscendingOrder.bind(this);
        this.sortByAssetClassDescendingOrder = this.sortByAssetClassDescendingOrder.bind(this);
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

      sortDescendingOrder = (attribute) => {
        let data = [].concat(this.state.inputData).sort((a, b) => a[attribute] >= b[attribute] ? 1 : -1)
        let direction = "DOWN"
        this.setState({
            inputData: data,
            arrowLogic: this.getArrowLogic(attribute, direction),
        })
      }

      sortAscendingOrder = (attribute) => {
        let data = [].concat(this.state.inputData).sort((a, b) => a[attribute] < b[attribute] ? 1 : -1)
        let direction = "UP"
        this.setState({
            inputData: data,
            arrowLogic: this.getArrowLogic(attribute, direction),
        })

      }
      sortByAssetClassDescendingOrder = (attribute) => {
        let data = [].concat(this.state.inputData).sort((a, b) => ASSET_CLASS_SORT_ORDER[a.assetClass] - ASSET_CLASS_SORT_ORDER[b.assetClass])
        let direction = "DOWN"
        this.setState({
          inputData: data,
          arrowLogic: this.getArrowLogic(attribute, direction),
      })
      console.log('desc')
      console.log(this.state.arrowLogic)
    }

    sortByAssetClassAscendingOrder = (attribute) => {
      let data = [].concat(this.state.inputData).sort((a, b) => - ASSET_CLASS_SORT_ORDER[b.assetClass] - ASSET_CLASS_SORT_ORDER[a.assetClass])
      let direction = "UP"
      this.setState({
        inputData: data,
        arrowLogic: this.getArrowLogic(attribute, direction),
    })
    console.log('asend')
    console.log(this.state.arrowLogic)
  }

    sortByAssetClass = (attribute) => {
      if ((!this.state.arrowLogic.assetClass) || this.state.arrowLogic.assetClass === "UP"){
        this.sortByAssetClassDescendingOrder(attribute)
      }
      else if (this.state.arrowLogic.assetClass === "DOWN"){
        this.sortByAssetClassAscendingOrder(attribute)
      }
  }

  sortAttribute = (attribute) => {
    if ((!this.state.arrowLogic[attribute]) || this.state.arrowLogic[attribute] === "UP"){
      this.sortDescendingOrder(attribute)
    }
    else if (this.state.arrowLogic[attribute] === "DOWN"){
      this.sortAscendingOrder(attribute)
    }

  }



    render() {
      console.log(this.state.arrowLogic)
        return(
          <div>
            <div >
              <div >
                <table class="table table-bordered" >
                    <tr>
                        <th onClick={() => {this.sortByAssetClass('assetClass')}}> Asset Class {SORT_ARROW[this.state.arrowLogic['assetClass']]}</th>
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