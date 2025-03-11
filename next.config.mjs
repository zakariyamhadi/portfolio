/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'aceternity.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'static.vecteezy.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'lafrenchfab.fr',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'i.hellowork.com',
            port: '',
            pathname: '/**',
          },
          
        ],
      },
};

export default nextConfig;
