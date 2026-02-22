/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-940ccf6255b54fa799a9b01050e6c227.r2.dev",
      },
      {
        protocol: "https",
        hostname: "www.upwork.com",
      },
      {
        protocol: "https",
        hostname: "letzmwekswulldwvtsto.supabase.co",
      },
    ],
  },
};

export default nextConfig;
