/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pub-0a317536a89843af86131dacff952880.r2.dev"
            }
        ]
    }
};

export default nextConfig;
