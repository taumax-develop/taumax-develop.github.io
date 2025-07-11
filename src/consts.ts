// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'システム開発知識が集うサイト';
export const SITE_DESCRIPTION = 'システム開発知識が集うサイト';
export let BASE_URL = () => {
  if (import.meta.env.PROD) {
    return "https://taumax-develop.github.io"
  }
  return "http://localhost:4321"
}
