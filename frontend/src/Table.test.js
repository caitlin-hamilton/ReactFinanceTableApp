import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from "./Table";

Enzyme.configure({ adapter: new Adapter() })

test('test sortAscendingOrder', () => {
    const wrapper = shallow(<Table inputRows={[{price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: 175, assetClass: 'Credit', ticker: 'BETA'}]}/>)
    expect(wrapper.instance().state.inputData).toStrictEqual([{price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: 175, assetClass: 'Credit', ticker: 'BETA'}])
    wrapper.instance().sortAscendingOrder('price');
    expect(wrapper.instance().state.inputData).toStrictEqual([{price: 175, assetClass: 'Credit', ticker: 'BETA'}, {price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}])
    wrapper.unmount()
})

test('test sortDescendingOrder', () => {
    const wrapper = shallow(<Table inputRows={[{price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: 175, assetClass: 'Credit', ticker: 'BETA'}]}/>)
    expect(wrapper.instance().state.inputData).toStrictEqual([{price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: 175, assetClass: 'Credit', ticker: 'BETA'}])
    wrapper.instance().sortDescendingOrder('ticker');
    expect(wrapper.instance().state.inputData).toStrictEqual([{price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: 175, assetClass: 'Credit', ticker: 'BETA'}, {price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}])
    wrapper.unmount()
})

test('test sortByAssetClass', () => {
    const wrapper = shallow(<Table inputRows={[{price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: 175, assetClass: 'Credit', ticker: 'BETA'}]}/>)
    expect(wrapper.instance().state.inputData).toStrictEqual([{price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: 175, assetClass: 'Credit', ticker: 'BETA'}])
    wrapper.instance().sortByAssetClass();
    expect(wrapper.instance().state.inputData).toStrictEqual([{price: -50, assetClass: 'Equities', ticker: 'CHARLIE'}, {price : 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: 175, assetClass: 'Credit', ticker: 'BETA'}])
    wrapper.unmount()
})