import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();


  }


  filterState = event => {
    this.props.onChangeType(event.target.value)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.filterState} value={this.props.filters.type}>
            {(this.props.filters.type === "all") ? <option value="all" selected>All</option> : <option value="all">All</option>}
            {(this.props.filters.type === "cat") ? <option value="cat" selected>Cats</option> : <option value="cat">Cats</option>}
            {(this.props.filters.type === "dog") ? <option value="dog" selected>Dogs</option> : <option value="dog">Dogs</option>}
            {(this.props.filters.type === "micropig") ? <option value="micropig" selected>Micropigs</option> : <option value="micropig">Micropigs</option>}
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
