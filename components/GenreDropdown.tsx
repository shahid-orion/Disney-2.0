import { Genres } from '@/typings'
import React from 'react'
import { ChevronDown } from 'lucide-react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
	DropdownMenuItem
} from './ui/dropdown-menu'
import Link from 'next/link'

const GenreDropdown = async () => {
	const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en'

	const options: RequestInit = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`
		},
		next: {
			revalidate: 60 * 60 * 24 //caching every 24 hours
		}
	}
	const response = await fetch(url, options)
	const data = (await response.json()) as Genres

	console.log(data.genres)

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="text-white flex justify-center items-center">
				Genre <ChevronDown className="ml-1" />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuSeparator />
				{/* <DropdownMenuContent>Select</DropdownMenuContent> */}
				{data.genres.map((genre) => (
					<DropdownMenuItem key={genre.id}>
						<Link href={`/genre/${genre.id}?genre=${genre.name}`}>
							{genre.name}
						</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default GenreDropdown
