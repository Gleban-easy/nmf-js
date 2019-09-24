import React from 'react';
import './App.css';
import PostList from './components/PostList'
import Button from './components/Button'
import RequestForm from './components/RequestForm'  



function App() { 
  return (
    <div>
      <Button />
      <PostList />
      <RequestForm boxName="sender"/>
      <RequestForm boxName="reciever"/>
      <RequestForm boxName="value"/>
      <RequestForm boxName="time"/>
      <RequestForm boxName="category"/>
    </div>
  );
}

export default App;
