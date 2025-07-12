// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'システム開発知識が集うサイト';
export const SITE_DESCRIPTION = 'システム開発に関する知識を集めたサイト';
export const TWITTER_CARD_SUMMARY = 'summary'
export const TWITTER_CARD_LARGE = 'summary_large_image'
export const BASE_URL: string = function() {
  let baseUrl = "https://taumax-develop.github.io"
  if (import.meta.env.DEV) {
    baseUrl = "http://localhost:4321"
  }
  return baseUrl
}()
