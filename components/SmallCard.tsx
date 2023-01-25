import React from 'react';

interface Props {
	key: string;
	img: string;
	distance: string;
	location: string;
}

function SmallCard({ key, img, distance, location }: Props) {
	return (
		<div>
			<p>{key}</p>
			<p>{img}</p>
			<p>{distance}</p>
			<p>{location}</p>
		</div>
	);
}

export default SmallCard;
