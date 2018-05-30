import _ from 'lodash'
import React , { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import PersonList from './components/person_list'
import PersonDetail from './components/person_detail'
import Dropdown from './components/login_dropDown'


const people = {
    "People": [
      {
        "name": "Andrew Amernante",
        "rating": 3,
        "img": "http://www.fillmurray.com/200/200",
        "Description": "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
        "Likes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ],
        "Dislikes": [
          "Birds",
          "Red things",
          "Danish food",
          "Dead Batteries"
        ]
      },
      {
        "name": "Frank Wang",
        "rating": 5,
        "img": "http://www.fillmurray.com/200/200",
        "Description": "Before errors, mails were only pressures. This is not to discredit the idea that a magic is the prose of an elizabeth. This could be, or perhaps some posit the outmost coil to be less than dedal. Some assert that those treatments are nothing more than carp.",
        "Likes": [
          "Frank",
          "Manchester United",
          "Football",
          "Programming"
        ],
        "Dislikes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ]
      },
      {
        "name": "Sissi Chen",
        "rating": 5,
        "img": "http://www.fillmurray.com/200/200",
        "Description": "Aaah! Natural light! Get it off me! Get it off me! Oh, loneliness and cheeseburgers are a dangerous mix. D'oh. Here's to alcohol, the cause of — and solution to — all life's problems.",
        "Likes": [
          "Cats",
          "the beach",
          "Chopin",
          "Blue things"
        ],
        "Dislikes": [
          "Birds"
        ]
      },
      {
        "name": "Diego Garcia",
        "rating": 2,
        "img": "http://www.fillmurray.com/200/200",
        "Description": "Facts are meaningless. You could use facts to prove anything that's even remotely true! I prefer a vehicle that doesn't hurt Mother Earth. It's a go-cart, powered by my own sense of self-satisfaction. You don't win friends with salad.",
        "Likes": [
          "Talking Spanish",
          "Spanish food",
          "Spanish things",
          "Football"
        ],
        "Dislikes": [
          "Not talking spanish",
          "Chopin"
        ]
      },
      {
        "name": "Fuad Rashid",
        "rating": 4,
        "img": "http://www.fillmurray.com/200/200",
        "Description": "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
        "Likes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ],
        "Dislikes": [
          "Birds",
          "Red things",
          "Danish food",
          "Dead Batteries"
        ]
      },
      {
        "name": "Roy Anguiano",
        "rating": 4,
        "img": "http://www.fillmurray.com/200/200",
        "Description": "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
        "Likes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ],
        "Dislikes": [
          "Birds",
          "Red things",
          "Danish food",
          "Dead Batteries"
        ]
      }
    ]
}
  
class App extends Component {
    constructor( props ){
        super( props )
        this.state = { 
          people: people.People,
          selectedPerson: people.People[0], 
          searched: ''
        }
    }

    //can be used for an api call for new records every time user searches a new name, this will show results 
    //in the personlist component 
    personSearch( term ){
      this.setState({ 
        searched: term
      })
    }
    
    render() {
      const personSearch = _.debounce(( term ) => {
          this.personSearch( term )
      }, 300 )

        return (
            <div>
              <div>
                <Dropdown title={ <i className="material-icons">settings</i> } list={ location } />
                <SearchBar onSearchTermChange={ personSearch }/>
              </div>
              <PersonList 
                onPersonSelect={ selectedPerson => this.setState({ selectedPerson })}
                people={ this.state.people }/>
              <PersonDetail person={ this.state.selectedPerson }/>
           </div>
        )
    }
}

ReactDOM.render( <App />, document.querySelector('.container') )
