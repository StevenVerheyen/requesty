import { endpoints, postRequest } from '../helpers';

// !=========!
//   !CRAWL!
// !=========!

/**
 * Post crawl website
 * @param {json} body - Stringified JSON data containing the url key-values
 */
export async function postCrawl(body) {
  return await postRequest(endpoints.CRAWL, body);
}
