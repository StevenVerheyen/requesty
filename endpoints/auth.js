import { endpoints, postRequest, getRequest, putRequest } from '../helpers';

// !=========!
//   !AUTH!
// !=========!

/**
 * Login user and stores cookie locally
 * @param {json} body - Stringified JSON data containing login key-values
 */
export async function postLogin(body) {
  return await postRequest(endpoints.LOGIN, body);
}

/**
 * Register user and stores cookie locally
 * @param {json} body - Stringified JSON data containing register key-values
 */
export async function postRegister(body) {
  return await postRequest(endpoints.REGISTER, body);
}

/**
 * Get current logged in user data
 */
export async function fetchMe() {
  return await getRequest(endpoints.ME);
}

/**
 * Send a mail with a reset token
 * @param {json} body - Stringified JSON data containing forgot password key-values
 */
export async function postForgotPassword(body) {
  return await postRequest(endpoints.FORGOTPASSWORD, body);
}

/**
 * Logout the current user
 */
export async function postLogout() {
  return await postRequest(endpoints.LOGOUT);
}

/**
 * Change user password
 * @param {json} body - Stringified JSON data containing change password key-values
 */
export async function putChangePassword(body) {
  return await putRequest(endpoints.FORGOTPASSWORD, body);
}
