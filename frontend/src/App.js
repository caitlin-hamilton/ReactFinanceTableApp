import React from 'react';
import Table from './Table.js'
import InputRow from './InputRow'
import Button from './Peter'

function App() {
  return (
    <div>< Table inputRows={[{price: 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: 50, assetClass: 'Entity', ticker: 'CHARLIE'}, {price: 75, assetClass: 'Macro', ticker: 'BETA'}]}/></div>
    );
}

export default App;
