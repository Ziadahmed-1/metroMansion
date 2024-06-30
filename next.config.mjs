/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com", "ajsrp.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
