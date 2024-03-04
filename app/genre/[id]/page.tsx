import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
	params: {
		id: string
	}
	searchParams: {
		genre: string
	}
}

const GenrePage = ({ params: { id }, searchParams: { genre } }: Props) => {
	if (!id) notFound()
	console.log(id)
	console.log(genre)
	return (
		<div>
			Welcome to the genre ID: {id} and name: {genre}
		</div>
	)
}

export default GenrePage
