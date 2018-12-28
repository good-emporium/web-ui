import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

const ES_URL = 'https://search-search-orgs-b2gdyhlwlmu5ldzgqmfdswtnju.us-east-2.es.amazonaws.com/p-organizations/_search?q='
class Search extends Component {
    constructor() {
        super()
        this.state = {
            current: '',
            toSearch: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${ES_URL}${this.state.current}`)
            .then((response) => response.json())
            .then((results) => {
                localStorage.setItem('searchResults', JSON.stringify(results.hits.hits))
                this.setState({ current: '', toSearch: true })
            })
    }

    handleInput = (event) => {
        this.setState({ current: event.target.value });
    }

    render() {
        if (this.state.toSearch === true) {
            return <Redirect to={{ pathname: '/search-results/', state: { fromSearch: true }}} />
        }
        return (
            <form className="d-inline" autoComplete="off" onSubmit={this.handleSubmit}>
                <span className="autocomplete search-box">
                    <input
                        id="searchInput"
                        style={{ border: 'none' }}
                        type="text"
                        name="search"
                        placeholder="search to find your good..."
                        value={this.state.current}
                        onChange={this.handleInput} />
                    <button
                        id="search-button"
                        type="submit">
                        <i className="fas fa-search" aria-hidden="true"></i>
                    </button>
                </span>
            </form>
        )
    }
}

export default withRouter(Search);
