import type { NextConfig } from "next";

// Content Security Policy allowing Vercel Live feedback script and Google Fonts.
// Inline scripts and styles are enabled to avoid CSP violations in development.
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://vercel.live;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' https://images.unsplash.com https://placehold.co data:;
  font-src 'self' https://fonts.gstatic.com data:;
`;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            // Remove newlines to keep header valid
            value: ContentSecurityPolicy.replace(/\n/g, " ").trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
