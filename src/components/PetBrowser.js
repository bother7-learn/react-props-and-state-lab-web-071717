import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
  const Pets = this.props.pets.map((pet, index) => {
  return <Pet key={index} pet={pet} onAdoptPet={this.props.onAdoptPet}  isAdopted = {(this.props.adoptedPets.includes(pet.id)) ? true : false} />
  })
    return (
      <div className="ui cards">
        {Pets}
      </div>
    );
  }
}

export default PetBrowser;
