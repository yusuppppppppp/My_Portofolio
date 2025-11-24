/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
