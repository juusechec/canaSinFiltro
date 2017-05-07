import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
//import styles from './Search.css';

// Import Images
//import bg from '../../header-bk.png';

var Search = React.createClass({
  apiKey: '87dfa1c669eea853da609d4968d294be',
  getInitialState: function() {
    return {searchTerm:"", searchUrl:""};
  },
  handleKeyUp :function(e){
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      var searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
      this.setState({searchUrl:searchUrl});
    }
  },
  handleChange : function(e){
      this.setState({searchTerm : e.target.value});
  },
  render: function() {
    return (
          <div id="search" className="Search">
            <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="Search for a title..." value={this.state.searchTerm}/>
          </div>
    );
  }
});

export default Search;
