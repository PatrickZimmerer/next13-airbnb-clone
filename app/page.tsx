import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import NearbyCards from '../components/NearbyCards';

function Home() {
	return (
		<div>
			<Header />
			<Banner />

			<main>
				<section className="pt-6 max-w-7xl mx-auto px-8 sm:px-16">
					<h2 className="text-4xl font-semibold pb-4">Explore nearby</h2>
					<NearbyCards />
				</section>
			</main>
		</div>
	);
}

export default Home;
