import React from 'react'
import './App.css';
import SearchBar from './features/searchBar/search'
import Card from './features/cards/card'
import {connect} from 'react-redux'

export function App(props){
  return(
    <div className='App'>
      <SearchBar />
      <div style={{color:"white"}}><span>Requesting:&nbsp; </span>{props.apiUrl}</div>
      <Card />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      search : state.stateRedux.searchState,
      data : state.stateRedux.data,
      apiUrl : state.stateRedux.apiUrl
  }
}

export default connect(mapStateToProps)(App);