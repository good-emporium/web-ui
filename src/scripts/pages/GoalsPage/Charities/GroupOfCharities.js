import React, { Component } from 'react';
import IndividualCharity from './IndividualCharity';
import axios from 'axios'

class GroupOfCharities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      store: []
    }
  }
  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
      .then(json => json.data.results.map(result => (
        {
          name: `${result.name.first} ${result.name.last}`,
          id: result.registered
        })))
      .then(newData => this.setState({ users: newData, store: newData }))
      .catch(error => alert(error))
  }

  render() {
    return (
      <div className="orgs-table d-flex flex-row flex-wrap">
        <IndividualCharity />
        <IndividualCharity />
        <IndividualCharity />
        <IndividualCharity />
        <IndividualCharity />
        <IndividualCharity />
        <IndividualCharity />
        <IndividualCharity />
        <IndividualCharity />
      </div>
    );
  }
};

export default GroupOfCharities;