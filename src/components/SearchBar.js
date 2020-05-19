import React from 'react';

//state is necessary since the user will input and this requires state management when event is triggered

class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit (event) {
		event.preventDefault();
		console.log(this);
	}

	render () {
		return (
			<div className="ui segment">
				<form className="ui large form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Search your pictures here:</label>
						<div className="ui action input">
							<input
								name="search-term"
								type="text"
								onChange={(event) => {
									this.setState({ term: event.target.value });
								}} //onChange is an eventlistener
								value={this.state.term}
								placeholder="Enter your search term"
							/>
							<button className="ui button">Search</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
