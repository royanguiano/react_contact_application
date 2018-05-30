import React from "react"

const PersonListItem = ({ person, onPersonSelect }) => {
    const imageURL = person.img
    
    
    return (
        <li onClick={ () => onPersonSelect( person ) } className="list-group-item">
            <div className="person-list media">
                <div className="media-left">
                    <div className="media-heading"> { person.name }</div>
                </div>
            </div>
        </li>
    )
}
export default PersonListItem