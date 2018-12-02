import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import CharityPage from '../../CharityPage/Charity';


class GroupOfCharities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
    }
  }

  render() {
    var JSONObj = JSON.parse(localStorage.getItem('organizations'));
    // the code you're looking for

    // iterate over each element in the array

    const { error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div className="orgs-table d-flex flex-row flex-wrap">
          {JSONObj.map(item => (
            <div className="org-card">
              <img src={item.logo} alt='CharityLogo' />
              <Link to={'/org/'}>
                <div>{item.name}</div>
              </Link>
              <p>{item.mission_statement}</p>
              <Route path="/org/" component={CharityPage} />
            </div>
          ))}
        </div>
      );
    }
  }
}

export default GroupOfCharities;
