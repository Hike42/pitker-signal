import path from 'node:path';
import { fileURLToPath } from 'node:url';
import bundleAnalyzer from '@next/bundle-analyzer';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'static.licdn.com',
      },
    ],
    qualities: [75, 85, 100],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Protection contre le clickjacking
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          // Protection XSS
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Protection contre le MIME-type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // Politique de sécurité du contenu (CSP)
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: https:;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://api.microlink.io https://*.googleapis.com https://*.gstatic.com https://*.google.com;
              frame-src 'self' https://www.openstreetmap.org;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'self';
              upgrade-insecure-requests;
            `.replace(/\s+/g, ' ').trim()
          },
          // HSTS (Force HTTPS)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          // Référer Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // Permissions Policy
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          }
        ]
      }
    ];
  }
};

export default withBundleAnalyzer(nextConfig); 