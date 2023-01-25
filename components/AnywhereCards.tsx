import React from 'react';
import { AnywhereData } from '../typings';
import MediumCard from './MediumCard';

function fetchAnywhereData() {
	const data: AnywhereData[] = [
		{ img: 'https://links.papareact.com/2io', title: 'Outdoor getaways' },
		{ img: 'https://links.papareact.com/q7j', title: 'Unique stays' },
		{ img: 'https://links.papareact.com/s03', title: 'Entire homes' },
		{ img: 'https://links.papareact.com/8ix', title: 'Pet allowed' },
	];
	return data;
}

function AnywhereCards() {
	const anywhereData = fetchAnywhereData();
	return (
		<>
			<div className="flex max-w-full overflow-x-auto scrollbar-hide space-x-4">
				{anywhereData?.map(({ img, title }) => (
					<MediumCard key={img} img={img} title={title} />
				))}
			</div>
		</>
	);
}
export default AnywhereCards;
