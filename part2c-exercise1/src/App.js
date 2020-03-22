import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const Filter = (props) => {
  const searchVal = props.keyword
  const countries = props.countries
  const [button, setButton] = useState([])
  const filtered = countries.filter(function(country) {
    return country.name.includes(searchVal)
  })

  if(filtered.length > 10) {
    return (
      <div> Too many matches. Please specify another filter </div>
    )
  } else {
    return (
      <>
        {filtered.map(country => <Country key = {country.name} show = {false} name = {country.name} />)}
      </>
    )
  }
}

const Country = (props) => {
  const [country, setCountry] = useState([])
  const [show, setShow] = useState(false)
  const name = props.name
  const hook = () => {
    axios
    .get(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => {
      setCountry(response.data[0])
    })
  }
  useEffect(hook, [name])
  if(show) {
    return(
      <div>
        <h2> {country.name} </h2>
        <div> Capital: {country.capital} </div>
        <div> population: {country.population} </div>
        <h2> Languages </h2>
        {country.languages.map(language =>
          <li key = {language.name}> {language.name} </li>
        )}
        <img src = {country.flag} />
      </div>
    )
  } else {
    return(
      <p key = {country.name}>
        {country.name}
        <button onClick = {() => setShow(!show)}> show </button>
      </p>
    )
  }
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [newSearch, setSearchValue] = useState('')
  const [showAll, setShowAll] = useState(true)
  //The function body is executed and the component is rendered
  // for the first time. At this point render 0 notes is printed
  // -> data hasn't been fetched from the server.
  const hook = () => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      console.log(response.data)
      setCountries(response.data)
    })
  }
  //Take 2 parameters, the hook, which is a function
  //The 2nd argument is how often the effect is run
  // -> Empty array == first render of the component
  // The empty array prevents the call from being done twice or more
  useEffect(hook, [])
  const handlerSearch = (event) => {
    setSearchValue(event.target.value)
  }
  return(
    <div>
      <div> Input Search Value: <input onChange = {handlerSearch}/> </div>
      <Filter keyword = {newSearch} countries = {countries} />
    </div>
  )
}


export default App;
