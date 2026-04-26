/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  generateEtags: true,
  compress: true,
  
  images: {
    domains: ['awsdevopstraininginhyderabad.com'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/aws-training', destination: '/', permanent: true },
      { source: '/devops-training', destination: '/', permanent: true },
    ];
  },

  async rewrites() {
    return [
      { source: '/aws-cloud-online-training-in-hyderabad', destination: '/courses/aws-cloud-online-training-in-hyderabad' },
      { source: '/aws-devops-online-training-in-hyderabad', destination: '/courses/aws-devops-online-training-in-hyderabad' },
      { source: '/aws-data-engineering-online-training-in-hyderabad', destination: '/courses/aws-data-engineering-online-training-in-hyderabad' },
    ];
  },
};

export default nextConfig;
