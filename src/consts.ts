// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'システム開発知識が集うサイト';
export const SITE_DESCRIPTION = 'システム開発知識が集うサイト';
export const BASE_URL: string = function() {
  let baseUrl = "https://taumax-develop.github.io"
  if (import.meta.env.DEV) {
    baseUrl = "http://localhost:4321"
  }
  return baseUrl
}()
