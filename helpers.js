const api = '/api';
export const endpoints = {
  LOGIN: '/auth/login',
  ME: '/auth/me',
  REGISTER: '/auth/register',
  FORGOTPASSWORD: '/auth/forgotpassword',
  CHANGEPASSWORD: '/auth/changepassword',
  LOGOUT: '/auth/logout',
};

// !do not edit starting from here!

const cookieType = 'include'; // todo: change to `same-origin` before final deployment
const getRequestOptions = {
  method: 'GET',
  credentials: cookieType, // this makes it possible to send stored cookies with requests
};
const deleteRequestOptions = {
  method: 'DELETE',
  credentials: cookieType,
};
const putRequestOptions = {
  method: 'PUT',
  headers: {},
  credentials: cookieType,
};
const postRequestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: cookieType,
};

// ?=============?
//    ?GENERAL?
// ?=============?

/**
 * Fetch data and returns it as a JSON object
 * @param {string} endpoint Endpoint where data will be fetched from
 */
export async function getRequest(endpoint) {
  const res = await fetch(`${api}${endpoint}`, getRequestOptions);
  return await res.json();
}

/**
 * Post data and returns the response as a JSON object
 * @param {string} endpoint Endpoint where data will be posted to
 * @param {json} body Stringified JSON data containing key-values
 */
export async function postRequest(endpoint, body = undefined) {
  let requestOptions = postRequestOptions;
  if (body !== undefined) {
    requestOptions = { ...postRequestOptions, body };
  }
  const res = await fetch(`${api}${endpoint}`, requestOptions);
  return await res.json();
}

/**
 * Puts (update) data and returns the response as a JSON object
 * @param {string} endpoint Endpoint where data will be updated to
 * @param {any} body Any type. E.g. FormData, or a stringified JSON data object
 * @discusion When `body` is not a type of FormData, the header will be extended with `Content-Type: application/json`. Otherwise this key-value will not be set.
 */
export async function putRequest(endpoint, body) {
  let requestOptions = putRequestOptions;
  if (!(body instanceof FormData)) {
    requestOptions.headers['Content-Type'] = 'application/json';
  }
  const extendedRequestOptions = { ...requestOptions, body };
  const res = await fetch(`${api}${endpoint}`, extendedRequestOptions);
  return await res.json();
}

/**
 * Delete data and returns the response as a JSON object
 * @param {string} endpoint Endpoint where data will be deleted from
 */
export async function deleteRequest(endpoint) {
  const res = await fetch(`${api}${endpoint}`, deleteRequestOptions);
  return await res.json();
}
