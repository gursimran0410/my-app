import React from 'react'
import axios from 'axios'
import '../../App.css'
import {connect} from 'react-redux'

function SearchBar(props){

    const handleChange = (e) => {
        props.addSearchToState(e.target.value)
    }

    const handleKeyPress = (e) => {
        e.nativeEvent.code === "Enter" ? handleButtonClick() : console.log("")
    }

    const handleButtonClick = () => {
        let link = `https://api.jikan.moe/v3/search/anime?q=${props.search}`
        props.addApiLinkToState(link)
        axios.get(link)
        .then(response => props.addApiDataToState(response.data.results))
        .catch(error => console.log(error))
    }
    
    return(
        <div className="search">
            <input
                type = "text"
                id = "search_query"
                className = "searchinput"
                placeholder = "search for an anime, e.g Naruto"
                value={props.search}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
            <button 
                id = "searchButton"
                className = "searchButton"
                onClick={handleButtonClick}
            >
                Go
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        search : state.stateRedux.searchState,
        data : state.stateRedux.data,
        cardsToShow : state.stateRedux.cardsToShow
    }
}
    
const mapDispatchToProps = (dispatch) => {
return {
        addSearchToState: (data) => {
            dispatch({ type: "setSearchState", payload: data })
        },
        addApiDataToState: (data) => {
            dispatch({ type: "setDataState", payload: data})
        },
        addApiLinkToState: (data) => {
            dispatch({ type: "setLinkState", payload: data})
        },
        addCardsToShow: (data) => {
            dispatch({ type: "setCardsToShow", payload: data})
        }
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);