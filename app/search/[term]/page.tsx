import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
	params: {
		term: string
	}
}

const SearchPage = ({ params: { term } }: Props) => {
	if (!term) notFound()

	//API call to get searched movies

	//API call to get popular movies

	return <div>Welcome to the page: {decodeURI(term)}</div>
}

export default SearchPage
