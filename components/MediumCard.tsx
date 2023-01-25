import Image from 'next/image';
import React from 'react';

interface Props {
	img: string;
	title: string;
}

function MediumCard({ img, title }: Props) {
	return (
		<div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
			<div className="cursor-pointer relative h-80 w-80">
				<Image src={img} fill alt="location-image" className="rounded-xl" />
			</div>
			<h3 className="pt-4 text-2xl">{title}</h3>
		</div>
	);
}

export default MediumCard;
