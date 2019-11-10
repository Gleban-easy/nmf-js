import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Layout from './hoc/Layout/Layout'

import AddTransaction from './containers/AddTransaction/AddTransaction'
import Auth from './containers/Auth/Auth'
import ShowTransaction from './containers/ShowTransaction/ShowTransactions'
import HomePage from './containers/HomePage/HomePage'


import './App.css';


function App() { 
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={Auth}/>
        <Route path="/add" component={AddTransaction}/>
        <Route path="/get" component={ShowTransaction}/>
        <Route path="/" component={HomePage}/>
        
      </Switch>
    </Layout>  
  );
}

export default App;
