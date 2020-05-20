import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
	onSearchSubmit (term) {
		axios.get('https://api.unsplash.com/search/photos', {
			params  : { query: term },
			headers : {
				Authorization :
					'Client-ID 23dUFRS6PdL6XGFaSVWqOWqg-_zF7Y3scVMduIHs7Eo'
			}
		});
	}

	render () {
		return (
			<div className="ui container" style={{ marginTop: 10 }}>
				<SearchBar onSearchBar={this.onSearchSubmit} />
				//onSearchBar can be any name, but is referenced to
				this.props.onSearchBar in child element.
			</div>
		);
	}
}

export default App;
