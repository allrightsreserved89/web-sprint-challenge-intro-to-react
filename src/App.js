import React from 'react';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

import Character from './components/Character.js'
import styled from 'styled-components'
const Title = styled.h1`
  font-size: 60px;
  color: white;
`
const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then((res)=>{
      setData(res.data)
    })
    .catch()
  },[])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Title className="Header">React Wars @</Title>
      {data.map(element=>Character({'data':element}))}
    </div>
  );
}
