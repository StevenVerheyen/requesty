import { endpoints, postRequest, getRequestDownload } from '../helpers';

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

/**
 * Get download PDF file
 * @param {string} fileName - Filename of the PDF on the server
 */
export async function getDownloadPdf(fileName) {
  return await getRequestDownload(`${endpoints.DOWNLOAD}/${fileName}`);
}
