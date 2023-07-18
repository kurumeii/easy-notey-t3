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
    dangerouslyAllowSVG: true,
    domains: [
      "upload.wikimedia.org",
      "raw.githubusercontent.com",
      "avatars.githubusercontent.com",
      "camo.githubusercontent.com",
      "trpc.io",
      "next-auth.js.org",
      "codemirror.net",
      "zod.dev",
    ],
  },
}

export default config
