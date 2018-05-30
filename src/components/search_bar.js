import React, { Component } from "react"

class SearchBar extends React.Component {
    constructor( props ) {
       super( props )

       this.state = { term: '' }
    }

    render() {
        return (
            
            <div className="search-bar">
                
                <div className="row">
                <div className="input-field col s6">
                <i className="material-icons prefix">search</i>
                <textarea id="icon_prefix2" className="materialize-textarea" value = { this.state.term }
                onChange = { event => this.onInputChange( event.target.value ) }></textarea>
                <label htmlFor="icon_prefix2"></label>
                </div>
            </div>
            </div>
        )
    }

    //when ever input changes run this function
    onInputChange( term ){
        this.setState({ term })
        this.props.onSearchTermChange( term )
    }
}

export default SearchBar