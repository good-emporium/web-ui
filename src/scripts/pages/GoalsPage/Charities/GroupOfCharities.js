import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import CharityPage from '../../CharityPage/Charity';


class GroupOfCharities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      sdgId: props ? props.sdgId : null
    }
  } 
  componentDidMount() {
    fetch("https://api.goodemporium.com/v0/organizations")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
  render() {
    const { error, isLoaded, items, sdgId } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    const orgs = !sdgId ? items : items.filter(org => org.sdg_keys? org.sdg_keys.includes(sdgId) : null)
        return (
          <div className="orgs-table d-flex flex-row flex-wrap">
          {orgs.map((item, index) => (
            <div key={index} className="org-card">
              <img src={item.logo} alt='CharityLogo' />
              <Link to={'/org/'}>
              <div>{item.name}</div>
              </Link>
              <p>{item.description}</p>
              <Route path="/org/" component={CharityPage} />
            </div>
          ))}
      </div>
        )
    }
  }
}

export default GroupOfCharities;
