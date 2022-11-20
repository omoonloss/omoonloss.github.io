// https://developers.cloudflare.com/pages/platform/functions/api-reference/

const API_URL = 'https://hacker-news.firebaseio.com/v0'

export const onRequestGet = async ({ request }) => {
  const { method, headers, url } = request
  // refer to https://dmitripavlutin.com/parse-url-javascript/
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  // e.g. pathname=/api/hn/v0/item/121003.json
  const pathName = new URL(url).pathname.replace('/api/hn/v0/', '');
  return await fetch(
    `${API_URL}/${pathName}`,
    {
      method: "GET",
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
    }
  )
}
