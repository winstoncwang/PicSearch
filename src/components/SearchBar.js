import React from 'react';

//state is necessary since the user will input and this requires state management when event is triggered

class SearchBar extends React.Component {
	render () {
		return (
			<div>
				<form>
					<input type="text" placeholder="Enter your search term" />
				</form>
			</div>
		);
	}
}

export default SearchBar;
