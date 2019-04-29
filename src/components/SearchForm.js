import {typeSearchBar, sortBy} from "../store/actions";
import React, { Component } from "react";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
        typeSearchBar: str => dispatch(typeSearchBar(str)),
        fSortBy: option => dispatch(sortBy(option))
    };
}

const mapStateToProps = state => {
    return { searchBar: state.searchBar, pSortBy: state.sortBy };
};

class SearchForm_ extends Component {

    render() {
        let select = (
        <span className="select is-rounded">
                        <select value={this.props.pSortBy} onChange={(event)=>this.props.fSortBy(event.target.value)}>
                          <option value="id">Id</option>
                          <option value="votes">Votes</option>
                          <option value="random">Random</option>
                        </select>
        </span>
        );

        if(this.props.searchBar) {
            select = (
                <span className="select is-rounded is-disabled">
                        <select >
                          <option disabled>Best Match</option>
                        </select>
                </span>
            );

        }



        return (
            <div className="field search-field has-addons has-addons-centered">
                <p className="control">
                    <input className="input is-rounded search-input" type="text" placeholder="start typing"
                    onChange={(event) => this.props.typeSearchBar(event.target.value)}
                    value={this.props.searchBar}
                    />
                </p>
                <p className="control">
                      {select}
                </p>
            </div>
        )
    }
}

const SearchForm = connect(mapStateToProps, mapDispatchToProps)(SearchForm_);
export default SearchForm;
