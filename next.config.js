/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wrn5xhmwg3rulhoy.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "digitalpress.fra1.cdn.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
