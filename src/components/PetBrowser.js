import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  allPets = (data) => {
     return data.map( pet => {
      return (<Pet
        key={pet.id}
        type={pet.type}
        gender={pet.gender}
        age={pet.age}
        weight={pet.weight}
        name={pet.name}
        isAdopted={pet.isAdopted}
      />)
    })
  }

  render() {
    return (<div className="ui cards">
            {this.allPets(this.props.pets)}
          </div>)
  }
}

export default PetBrowser
