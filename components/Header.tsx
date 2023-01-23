import React from 'react';
import Image from 'next/image';
import logo from '../images/airbnb-logo.png';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function Header() {
	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-2 px-4 md:px-8">
			<div className="cursor-pointer">
				<Image src={logo} alt="logo" width="120" height="50" />
			</div>
			<div className="flex items-center rounded-full px-2 md:border-2 md:shadow-sm">
				<input
					className="outline-none flex-grow pl-2 bg-transparent"
					type="text"
					placeholder="Start your Search"
				/>
				<MagnifyingGlassIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex" />
			</div>
			<div></div>
		</header>
	);
}

export default Header;
