import React, { Component } from 'react'


const Table = ( props ) => {
    console.log( 'props',props )
    let likes = props.people.Likes, 
        disLikes = props.people.Dislikes

    const personLikes = likes.map(( thing, i ) => {
            return ( <div key={ i }> { thing } </div> )    
    })

    const personDislikes = disLikes.map(( thing, i ) => {
        return ( <div key={ i }> { thing } </div> )    
})

    return (
        <div className="panel panel-default">
            <div className="leftPanel">
                <span className="left-header">Likes:</span>
                { personLikes }
            </div>
            <div className="rightpanel">
                <span className="right-header">Dislikes:</span>
                { personDislikes }
            </div>
        </div>
    )
}

export default Table