import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import NearbyCards from '../components/NearbyCards';
import AnywhereCards from '../components/AnywhereCards';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

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

				<section className="py-8">
					<h2 className="text-4xl font-semibold pb-4">Live anywhere</h2>
					<AnywhereCards />
				</section>
				<section className="pb-8">
					<LargeCard
						img="https://links.papareact.com/4cj"
						title="The Greatest Outdoors"
						description="Wishlists curated by Patrick."
						buttonText="Get inspired"
					/>
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default Home;
