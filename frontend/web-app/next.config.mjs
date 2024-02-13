// @ts-check

export default (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'cdn.pixabay.com',
                    pathname: '**',
                },
            ],
        },
    }
    return nextConfig
}