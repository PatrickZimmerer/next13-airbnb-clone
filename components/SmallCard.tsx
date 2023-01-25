import React from 'react';
import Image from 'next/image';

interface Props {
	img: string;
	distance: string;
	location: string;
}

function SmallCard({ img, distance, location }: Props) {
	return (
		<div className="flex items-center m-2 mt-4 space-x-4 rounded-xl cursor-pointer transition transform duration-200 ease-out hover:bg-gray-100 hover:scale-105">
			<div className="relative h-16 w-16">
				<Image src={img} fill alt="location-image" className="rounded-lg" />
			</div>
			<div>
				<h2>{location}</h2>
				<h3 className="text-gray-500">{distance}</h3>
			</div>
		</div>
	);
}

export default SmallCard;
