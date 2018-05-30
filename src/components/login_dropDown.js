import React, { Component } from 'react'
var FontAwesome = require( 'react-fontawesome' )

class DropDown extends Component {
    constructor( props ){
        super( props )
        this.state = {
            listOpen: false,
            headerTitle: this.props.title,
            user: {
                        id: 0,
                        username: 'roy_anguiano',
                        key: 'user', 
                        firstname: 'roy', 
                        lastname: 'anguiano', 
                        imgURL: 'http://www.fillmurray.com/200/200'
                }
      }
    }

  handleClickOutside(){
    this.setState({
      listOpen: false
    })
  }

  toggleList(){
    this.setState( prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  toggleSelected( id, key ){
    let temp = this.state[key]
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }

  render(){
   
    const{ user, listOpen, headerTitle } = this.state
    
    return(
        <div className="dd-wrapper">
            <div className="dd-header" onClick={() => this.toggleList()}>
                <div className="dd-header-title">
                
                     <img className="userProfile" src={ user.imgURL } /> 
                     <span className="usernameTitle">{ user.username }</span> 
               
                    { listOpen ? <FontAwesome name="angle-up" size="2x"/> : <FontAwesome name="angle-down" size="2x"/> }
                
                </div>
            </div>

            { listOpen && <ul className="dd-list">
                <li className="dd-list-item" key={ user.id } >{ user.firstname } { user.lastname }</li>
                <button className="btn waves-effect waves-dark" type="submit" name="action">Log Out
                    <i className="material-icons right">exit_to_app</i>
                </button></ul> }
        </div>
    )
  }
}
export default DropDown