import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
	onSearchSubmit (term) {
		axios.get()
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
