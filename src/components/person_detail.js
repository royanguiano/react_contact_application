import React from 'react'
var Rating = require( 'react-rating' )
import PersonTable from './table'

const PersonDetail = ({ person }) => {
    if( !person ) {
        return <div>Loading...</div>
    }

    return (
        <div className="person-detail col-md-8">
            <div className="details">
                <img className="media-object" src={ person.img } />
                <div className="button-group">
                <a className="waves-effect waves-light btn-large">
                <i className="material-icons right">send</i>Send Message</a>
                    
                </div>
                <div className="img-group">
                    <Rating 
                        placeholderRating={ person.rating }
                        readonly={ true }
                        emptySymbol={ <img src="assets/images/heartgrey.png" className="icon" /> }
                        placeholderSymbol={ <img src="assets/images/heart.png" className="icon" /> }
                    />
                </div>
                <div className="personName">{ person.name }</div>
                <div className="personDescription">{ person.Description }</div>
                <PersonTable people={ person } />
            </div>
        </div>
    )
}

export default PersonDetail