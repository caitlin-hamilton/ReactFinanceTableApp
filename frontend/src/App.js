import React from 'react';
import Table from './Table.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>< Table inputRows={[{price: 100, assetClass: 'Macro', ticker: 'ALPHA'}, {price: -50, assetClass: 'Entity', ticker: 'CHARLIE'}, {price: 50, assetClass: 'Macro', ticker: 'BETA'}, {price: 175, assetClass: 'Credit', ticker: 'BETA'}]}/></div>
    );
}

export default App;
