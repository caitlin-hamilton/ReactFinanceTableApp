import React from 'react';
import Table from './Table.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {getTableData} from './api';

function App() {
  return (
    <div>< Table getTableData={getTableData}/></div>
    );
}

export default App;
