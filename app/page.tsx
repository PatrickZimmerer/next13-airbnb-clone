import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import NearbyCards from '../components/NearbyCards';
import AnywhereCards from '../components/AnywhereCards';

function Home() {
	return (
		<div>
			<Header />
			<Banner />

			<main className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-4">Explore nearby</h2>
					<NearbyCards />
				</section>

				<section className="pt-8">
					<h2 className="text-4xl font-semibold pb-4">Live anywhere</h2>
					<AnywhereCards />
				</section>
			</main>
		</div>
	);
}

export default Home;
