import React from 'react'

const CardsShow = ({cardsToRender}) => {
    console.log("CARDS MAP COMP",cardsToRender)
    return(
        <div className="cardsGroup">
            {cardsToRender.map((items,index) => {
                return(
                    <div className="card" key={index}>
                        <div className="cardImage"><img src={items.image_url} className="imagesrc" alt={items.title}/></div>
                        <div>{items.title}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardsShow