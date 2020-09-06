import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from "./Table";

Enzyme.configure({ adapter: new Adapter() })

function mockAPI(){
    return [{price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: 175, assetClass: 'Credit', ticker: 'BETA'}]
}

test('test sortAttributeAscendingOrder', () => {
    const wrapper = shallow(<Table getTableData={mockAPI}/>)
    expect(wrapper.instance().state.inputData).toStrictEqual([{price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: 175, assetClass: 'Credit', ticker: 'BETA'}])
    wrapper.instance().sortAttributeAscendingOrder('price');
    expect(wrapper.instance().state.inputData).toStrictEqual([{price: 175, assetClass: 'Credit', ticker: 'BETA'}, {price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}])
    wrapper.unmount()
})

test('test sortAttributeDescendingOrder', () => {
    const wrapper = shallow(<Table getTableData={mockAPI}/>)
    expect(wrapper.instance().state.inputData).toStrictEqual([{price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: 175, assetClass: 'Credit', ticker: 'BETA'}])
    wrapper.instance().sortAttributeDescendingOrder('ticker');
    expect(wrapper.instance().state.inputData).toStrictEqual([{price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: 175, assetClass: 'Credit', ticker: 'BETA'}, {price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}])
    wrapper.unmount()
})

test('test sortAssetClassDescendingOrder', () => {
    const wrapper = shallow(<Table getTableData={mockAPI}/>)
    expect(wrapper.instance().state.inputData).toStrictEqual([{price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: 175, assetClass: 'Credit', ticker: 'BETA'}])
    wrapper.instance().sortAssetClassDescendingOrder();
    expect(wrapper.instance().state.inputData).toStrictEqual([{price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}, {price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: 175, assetClass: 'Credit', ticker: 'BETA'}])
    wrapper.unmount()
})

test('test sortAssetClassAscendingOrder', () => {
    const wrapper = shallow(<Table getTableData={mockAPI}/>)
    expect(wrapper.instance().state.inputData).toStrictEqual([{price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: 175, assetClass: 'Credit', ticker: 'BETA'}])
    wrapper.instance().sortAssetClassAscendingOrder();
    expect(wrapper.instance().state.inputData).toStrictEqual([{price: 175, assetClass: 'Credit', ticker: 'BETA'}, {price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}])
    wrapper.unmount()
})

test('test getArrowLogic', () => {
    const wrapper = shallow(<Table getTableData={mockAPI}/>)
    expect(wrapper.instance().getArrowLogic('assetClass', 'DOWN')).toEqual({'assetClass': 'DOWN', 'price': false, 'ticker': false})
    expect(wrapper.instance().getArrowLogic('ticker', 'UP')).toEqual({'assetClass': false, 'price': false, 'ticker': 'UP'})
    wrapper.unmount()
})