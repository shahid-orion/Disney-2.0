const getImagePath = (imagePath?: string, fullSize?: boolean) => {
	return imagePath
		? `http://image.tmdb.org/t/p/${fullSize ? 'original' : 'w500'}/${imagePath}`
		: '/unsplash.com'
}
export default getImagePath
