import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import disneyLogo2 from '../lib/assets/Disney+_logo.svg.png'
import { ThemeToggle } from './ThemeToggler'
import SearchInput from './SearchInput'
import GenreDropdown from './GenreDropdown'

const Header = () => {
	return (
		<header
			className="fixed w-full z-20 top-0 flex items-center justify-between 
        p-5 bg-gradient-to-t from-blue-200/0 via-blue-900/25 to-blue-900"
		>
			<Link href="/" className="mr-10">
				<Image
					src={disneyLogo2}
					alt="Disney"
					width={120}
					height={100}
					className="cursor-pointer invert-0 dark:invert-0"
				/>
			</Link>
			<div className="flex space-x-2">
				{/* Genre dropdown */}
				<GenreDropdown />

				{/* Search input */}
				<SearchInput />

				{/* Theme Toggler */}
				<ThemeToggle />
			</div>
		</header>
	)
}

export default Header
