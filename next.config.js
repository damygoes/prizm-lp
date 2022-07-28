/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["images.unsplash.com"],
	},
	future: { webpack5: true },
};

module.exports = nextConfig;
