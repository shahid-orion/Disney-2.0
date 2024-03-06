import { SearchResults } from '@/typings'

//const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
//const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
//const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
//const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

const fetchFromTMBD = async (url: URL, cacheTime?: number) => {
	url.searchParams.set('include_adult', 'false')
	url.searchParams.set('include_video', 'false')
	url.searchParams.set('sort_by', 'popularity.desc')
	url.searchParams.set('language', 'en-US')
	url.searchParams.set('page', '1')

	const options: RequestInit = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`
		},
		next: {
			revalidate: cacheTime || 60 * 60 * 24 //caching every 24 hours
		}
	}

	const response = await fetch(url, options)
	const data = (await response.json()) as SearchResults

	return data
}

export const getUpcomingMovies = async () => {
	const url = new URL('https://api.themoviedb.org/3/movie/upcoming')
	const data = await fetchFromTMBD(url)

	return data.results
}
export const getTopRatedMovies = async () => {
	const url = new URL('https://api.themoviedb.org/3/movie/top_rated')
	const data = await fetchFromTMBD(url)

	return data.results
}
export const getPopularMovies = async () => {
	const url = new URL('https://api.themoviedb.org/3/movie/popular')
	const data = await fetchFromTMBD(url)

	return data.results
}
export const getDiscoverMovies = async (id?: string, keywords?: string) => {
	const url = new URL('https://api.themoviedb.org/3/discover/movie')
	keywords && url.searchParams.set('with_keyword', keywords)
	id && url.searchParams.set('with_genres', id)

	const data = await fetchFromTMBD(url)

	return data.results
}
export const getSearchedMovies = async (term: string) => {
	const url = new URL('https://api.themoviedb.org/3/search/movie')

	url.searchParams.set('query', term)

	const data = await fetchFromTMBD(url)

	return data.results
}
