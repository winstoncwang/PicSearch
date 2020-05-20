import React from 'react';

class ImageCard extends React.Component {
	constructor (props) {
		super(props);
		this.state = { spans: 0 };

		this.imageRef = React.createRef(); //ref system similar to DOM selection from vanilla js
	}

	componentDidMount () {
		//we can not access client height straight away because image hasnt loaded. The value of
		//this.imageRef.current.clientHeight will be 0. So we add an eventlistener for the image to load
		//then we get the actual clientheight
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
		//callback invoked after image loads to access the correct value of clientHeight
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10);
		this.setState({ spans });
	};

	render () {
		const { alt_description, urls } = this.props.image;

		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img
					ref={this.imageRef}
					alt={alt_description}
					src={urls.regular}
				/>
			</div>
		);
	}
}

export default ImageCard;
