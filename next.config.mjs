/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs")

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "raw.githubusercontent.com",
      "trpc.io",
      "next-auth.js.org",
      "avatars.githubusercontent.com",
      "codemirror.net",
      "zod.dev",
    ],
  },
}

export default config
