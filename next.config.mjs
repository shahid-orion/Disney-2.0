/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'links.papareact.com' },
			{
				protocol: 'https',
				hostname: 'unsplash.com',
				port: '',
				pathname: '/**'
			},
			{
				protocol: 'http',
				hostname: 'image.tmdb.org',
				port: '',
				// This pattern will match both 'original' and 'w500' sizes.
				// It's not possible to dynamically set the pathname based on the `fullSize` variable,
				// but by using '**', you allow any path under 'image.tmdb.org'.
				pathname: '/t/p/**'
			}
		]
	}
}

export default nextConfig
