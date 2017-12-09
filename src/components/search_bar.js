import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends Component {

    state = {term: ''}

    handleChange(term) {
      this.setState({term})
      this.props.onSearchTermChange(term)
    }


    render() {
        return (
            <div className='search-bar'>
                <input
                    value = {this.state.term}
                    onChange={e => this.handleChange(e.target.value)} />
            </div>
        );
    }


}

// SearchBar.propTypes = {};

export default SearchBar;

