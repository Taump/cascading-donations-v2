export default {
  PUBLIC_URL: process.env.NEXT_PUBLIC_PUBLIC_URL || process.env.VERCEL_URL,
  ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
  GITHUB_APP_KEYS: process.env.GITHUB_APP_KEYS, // only backend
  GITHUB_APP_CLIENT_ID: process.env.GITHUB_APP_CLIENT_ID,
  GITHUB_APP_CLIENT_SECRET: process.env.GITHUB_APP_CLIENT_SECRET,
  MAILERLITE_API_KEY: process.env.MAILERLITE_API_KEY, // only backend,
  AUTH_SECRET: process.env.AUTH_SECRET, // only backend
  HUB_ADDRESS: process.env.NEXT_PUBLIC_HUB_ADDRESS,
  ICON_CDN_URL: process.env.NEXT_PUBLIC_ICON_CDN_URL,
  AA_ADDRESS: process.env.NEXT_PUBLIC_AA_ADDRESS,
  BACKEND_API_URL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  ATTESTOR_AA: process.env.NEXT_PUBLIC_ATTESTOR_AA,
  ATTESTOR: process.env.NEXT_PUBLIC_ATTESTOR,
  PAIRING_URL: process.env.NEXT_PUBLIC_PAIRING_URL,
  REQUEST_RATE_LIMIT: 999,
  SEARCH_RATE_LIMIT: 29,
  INTRODUCTORY_ARTICLE_URL: "https://blog.obyte.org/kivach-cascading-donations-for-github-repositories-2b175bdbff77"
}