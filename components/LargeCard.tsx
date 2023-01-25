import Image from 'next/image';
import React from 'react';

interface Props {
	img: string;
	title: string;
	description: string;
	buttonText: string;
}

function LargeCard({ img, title, description, buttonText }: Props) {
	return (
		<div className="relative">
			<div className="relative sm:h-96 h-64">
				<Image src={img} fill alt="location-background-image" className="object-cover rounded-xl" />
			</div>
			<div className="absolute top-32 left-12">
				<h2 className="pb-2 text-lg sm:text-4xl">{title}</h2>
				<p className="pb-4">{description}</p>
				<button className="text-white bg-black shadow-sm hover:shadow-lg active:scale-95 transition duration-200 rounded-xl px-4 py-2">
					{buttonText}
				</button>
			</div>
		</div>
	);
}

export default LargeCard;
