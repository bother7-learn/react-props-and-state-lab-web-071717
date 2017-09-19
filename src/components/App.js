import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onChangeType = (filter) => {
    this.setState({filters: {type: filter}})
  }

  onAdoptPet = (petId) => {
    var adopt = [...this.state.adoptedPets, petId]
    this.setState({adoptedPets: adopt})
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets').then((result) => result.json).then(pets => this.setState({pets: pets}))
    } else {
      let url = '/api/pets?type=' + this.state.filters.type
      console.log(url)
      fetch(url).then((result) => result.json).then(pets => this.setState({pets: pets}))
    }

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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} filters={Object.assign({},this.state.filters)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
