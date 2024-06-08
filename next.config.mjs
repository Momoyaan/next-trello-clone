/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        POCKETBASE_URL: process.env.POCKETBASE_URL,
    },
};

export default nextConfig;
