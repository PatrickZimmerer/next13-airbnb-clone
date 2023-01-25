import Image from 'next/image';
import React from 'react';

interface Props {
	img: string;
	title: string;
}

function MediumCard({ img, title }: Props) {
	return (
		<div className="cursor-pointer">
			<div className="relative h-40 w-40 lg:h-80 lg:w-80 hover:scale-105 transform transition duration-300 ease-out">
				<Image src={img} fill alt="location-image" className="rounded-xl" />
			</div>
			<h3 className="pt-4 text-lg lg:text-2xl">{title}</h3>
		</div>
	);
}

export default MediumCard;
