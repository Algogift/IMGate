import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  images: {
    // Allow local proxy route with query strings for next/image
    // This fixes: `next/image` Un-configured localPatterns for /api/proxy/file?url=...
    localPatterns: [
      {
        pathname: '/api/proxy/file',
        // Omitting `search` allows any query string (e.g., ?url=...)
      },
      {
        pathname: '/images/**',
      },
      {
        pathname: '/media/**',
      },
    ],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.ctfassets.net' },
      { protocol: 'https', hostname: 'videos.ctfassets.net' },
      { protocol: 'https', hostname: 'assets.ctfassets.net' },
      { protocol: 'https', hostname: 'zoq5l15g49wj.cdn.contentful.com' },
      { protocol: 'https', hostname: 'maps.googleapis.com' },
      // Developer and CDN domains for new data files
      { protocol: 'https', hostname: 'cdn.properties.emaar.com' },
      { protocol: 'https', hostname: 'properties.emaar.com' },
      { protocol: 'https', hostname: 'sobharealty.com' },
      { protocol: 'https', hostname: 'www.sobharealty.com' },
      { protocol: 'https', hostname: 'nakheel.com' },
      { protocol: 'https', hostname: 'www.nakheel.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'storage.googleapis.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ]
  },
  
  reactStrictMode: true,
  poweredByHeader: false,
  
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['swiper', 'framer-motion'],
  },
  
  // Turbopack configuration for Next.js 16
  turbopack: {},
  
  // Compression and optimization
  compress: true,
};
export default nextConfig;
