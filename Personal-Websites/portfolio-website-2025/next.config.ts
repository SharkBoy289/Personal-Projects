import type { NextConfig } from "next";

// Content Security Policy allowing Vercel Live feedback script and Google Fonts.
// Inline scripts and styles are enabled to avoid CSP violations in development.
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://vercel.live;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com data:;
`;

const nextConfig: NextConfig = {
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
