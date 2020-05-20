import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		const response = await unsplash.get('/search/photos', {
			params : { query: term }
		});
		this.setState({ images: response.data.results });
	};

	render () {
		//onSearchBar can be any name, but is referenced to this.props.onSearchBar in child element.
		return (
			<div className="ui container" style={{ marginTop: 10 }}>
				<SearchBar onSearchBar={this.onSearchSubmit} />
				Found:{this.state.images.length}images
			</div>
		);
	}
}

export default App;
