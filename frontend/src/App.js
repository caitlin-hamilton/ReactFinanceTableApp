import React from 'react';
import Table from './Table.js'

function App() {
  return (
    <div>< Table inputRows={[{price: 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: 50, assetClass: 'Entity', ticker: 'CHARLIE'}, {price: 75, assetClass: 'Macro', ticker: 'BETA'}, {price: 175, assetClass: 'Credit', ticker: 'BETA'}]}/></div>
    );
}

export default App;
