import React from 'react';

const ImageList = (props) => {
	const image = props.images.map(({ alt_description, id, urls }) => {
		return <img alt={alt_description} key={id} src={urls.regular} />;
	});

	return <div>{image}</div>;
};

export default ImageList;
