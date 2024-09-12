/** @type {import('next').NextConfig} */

// next.config.js


const nextConfig = {
    images: {
      domains: ['lh3.googleusercontent.com'], // Add the external domain here
      remotePatterns: [
        {
          hostname: "a0.muscache.com",
          protocol: "https",
          port: "",
        },
        {
          hostname: "hxwsvfhgsutyckbbvvww.supabase.co",
          protocol: "https",
          port: "",
        },
      ],
    },
  };
  
  export default nextConfig;