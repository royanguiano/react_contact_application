import React from 'react'
import PersonListItem from './person_list_item'
 
const PersonList = ( props ) => {
    
    const personItem = props.people.map(( person, key ) => {
        return (
            <PersonListItem 
                onPersonSelect={ props.onPersonSelect }
                key={ key } 
                person={ person } />
            )
    })

    return (
        <ul className = "col-md-4 list-group">
        { personItem }
        </ul>
    )
}

export default PersonList