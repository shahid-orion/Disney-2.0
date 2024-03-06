/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{ protocol: 'https', hostname: 'links.papareact.com' }],
		remotePatterns: [{ protocol: 'http', hostname: 'image.tmdb.org' }]
	}
}

export default nextConfig
