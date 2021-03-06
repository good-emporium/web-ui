import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import CharityPage from '../../CharityPage/Charity';
import charity from '../../CharityPage/Charity';


class GroupOfCharities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      sdgId: props ? props.sdgId : null,
      classification: null,
      fromSearch: props.location.state.fromSearch || false
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.classification !== prevProps.classification) {
      this.setState({
        classification: this.props.classification
      })
    }
  }

  sourceParser() {
    const charities = JSON.parse(localStorage.getItem('searchResults'))
    return charities.map(charity => charity._source)
  }

  render() {
    const { sdgId, classification, fromSearch } = this.state;
    var JSONObj = fromSearch ?  this.sourceParser() : JSON.parse(localStorage.getItem('organizations'));
    let orgs = !sdgId ? JSONObj : JSONObj.filter(org => org.sdg_keys? org.sdg_keys.includes(sdgId) : null)
    let organizationType = ''
    if (classification && classification !== 'All') {
      organizationType = classification === 'Government-org' ? 'government' : classification.toLowerCase()
      orgs = orgs.filter(org => org.classification === classification)
    }

    // the code you're looking for

    // iterate over each element in the array

    const { error } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div className="orgs-table d-flex flex-row flex-wrap">
          {orgs.length > 0 ? orgs.map((item, index) => (
            <div key={index} className="org-card">
              <img src={item.logo} alt='CharityLogo' />
              <Link to={'/org/'}>
                <div>{item.name}</div>
              </Link>
              <p>{item.mission_statement}</p>
              <Route path="/org/" component={CharityPage} />
            </div>
          )) : <div>There are currently no {organizationType} organizations associated with this Sustainable Development Goal</div>}
        </div>
      );
    }
  }
}

export default withRouter(GroupOfCharities);
