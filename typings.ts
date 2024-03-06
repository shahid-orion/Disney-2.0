export type Genre = {
	id: number
	name: string
}
export type Genres = {
	genres: Genre[]
}
export type SearchResults = {
	page: number
	results: Movie[]
	total_pages: number
	total_results: number
}

export type Movie = {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	id: number
	title: string
	original_language: string
	original_title: string
	overview: string
	poster_path?: string
	media_type: string
	popularity: number
	release_date: string
	video: boolean
	vote_average: number
	vote_count: number
}
