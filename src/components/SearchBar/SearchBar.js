import React, { Component } from 'react';
import './SearchBar.css';


const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}


export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '', location: 'best_match', sortBy: 'best_match' };
        this.renderSortByOptions = this.renderSortByOptions.bind(this);
    }
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={this.sortByOptionValue}>{this.sortByOption}</li>
        });

    }
    getSortByClass(sortByOption) {
        if (sortByOption === this.state.sortBy) {
            return 'active';
        }
        else {
            return ''
        }
    }
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>{this.renderSortByOptions}</ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}