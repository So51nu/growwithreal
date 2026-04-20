// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "127.0.0.1",
//         port: "8000",
//         pathname: "/media/**",
//       },
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "8000",
//         pathname: "/media/**",
//       },
//     ],
//   },
// };

// export default nextConfig;

















// import withPWA from "next-pwa";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "127.0.0.1",
//         port: "8000",
//         pathname: "/media/**",
//       },
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "8000",
//         pathname: "/media/**",
//       },
//     ],
//   },
// };

// export default withPWA({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   disable: process.env.NODE_ENV === "development", // important
// })(nextConfig);


import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
    ],
  },
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})(nextConfig);