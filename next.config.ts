/** @type {import('next').NextConfig} */
const nextConfig = {
  // your other settings…
  experimental: {
    appDir: true,      // make sure you’re on Next 13+ App Router
  },
};

module.exports = nextConfig;
