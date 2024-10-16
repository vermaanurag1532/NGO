export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "enlightio.com",
        },
        {
          protocol: "https",
          hostname: "24ai.tech",
        },
        {
          protocol: "https",
          hostname: "example.com",
        },
        {
          protocol: "https",
          hostname: "github.com",
        },
        {
          protocol: "https",
          hostname: "blohth8gpzly7dan.public.blob.vercel-storage.com",
        },
      ],
    },
  };
  return nextConfig;
};
