import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeHandler = event => {
    this.setState({
      filters: {
        type:  event.target.value
      }
    })
  }

  populatePets = data => {
    this.setState({
      pets: [...data]
    })
  }

  onAdoptPet = petID => {
    // this.setState({
    //   pets[petID].isAdopted: true
    //   pets: [...data] 
    //   pets: [
    //     { id: petID}
    //   ]
    // })

    // this.setState({
    //   pets: [...this.state.pets][petID]["isAdopted"], true
    // })

    // Jose's
    let adoptedPet = {...this.state.pets}
    adoptedPet[petID] = true
    this.state({adoptedPet})
  }

  onFindPetsClick = () => {
    let apiUrl = '/api/pets'

    if (this.state.filters.type === "all") {
      apiUrl += ""
    } else {
      apiUrl += "?type=" + this.state.filters.type
    }



    fetch(apiUrl)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      // setState right here
      this.populatePets(data)
    })
    .catch(error => console.log(error.message))
  }




  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeHandler} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser adoptPet={this.props.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
