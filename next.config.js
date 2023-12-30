/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.ui8.net",
      },
      {
        hostname: "ui8.net",
      },
    ],
  },
};

module.exports = nextConfig;
