import React, { useEffect} from 'react'
import {connect} from 'react-redux'
import CardsShow from './renderCards'
import '../../App.css'

const maxCardsPerPage = 4
let arrayOfCards = []

export function Card(props){

    const sliceLoop = (start, end) => {
        if(props.data !== undefined && props.data?.length !== 0)
        {
            let cardsArray = props.data
            const slicedCards = cardsArray.slice(start,end)
            arrayOfCards =  [...arrayOfCards, ...slicedCards]
            props.addCardsToShow(arrayOfCards)
        }
    }

    useEffect(() => {
        arrayOfCards = []
        sliceLoop(0,maxCardsPerPage)
    },[props.data])

    const handleShowMoreCards = () => {
        sliceLoop(props.next, props.next + maxCardsPerPage)
        props.addNextState(props.next + maxCardsPerPage)
    }

    return(
        <div>
            <CardsShow cardsToRender = {props.cardsToShow} />
            {
                props.data !== undefined && props.data?.length !== 0
                ? arrayOfCards.length <= props.data.length 
                    ? <button onClick={handleShowMoreCards} className="button">Load More Posts!</button>
                    : null
                : null
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        search : state.stateRedux.searchState,
        data : state.stateRedux.data,
        cardsToShow : state.stateRedux.cardsToShow,
        next : state.stateRedux.next
    };
};
    
const mapDispatchToProps = (dispatch) => {
return {
        addSearchToState: (data) => {
            dispatch({ type: "setSearchState", payload: data })
        },
        addApiDataToState: (data) => {
            dispatch({ type: "setDataState", payload: data})
        },
        addCardsToShow: (data) => {
            dispatch({ type: "setCardsToShow", payload: data})
        },
        addNextState: (data) => {
            dispatch({ type: "setNextState", payload: data})
        }
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Card);