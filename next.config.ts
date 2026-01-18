import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Optional: Add trailing slashes for better S3/CloudFront compatibility
  trailingSlash: true,
  
  // Optional: Set base path if deploying to a subdirectory
  // basePath: '/portfolio',
};

export default nextConfig;