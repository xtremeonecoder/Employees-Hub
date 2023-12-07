/**
 * Employees Hub
 *
 * @category   Application_Frontend
 * @package    employees-hub
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 */

import type { AxiosResponse } from 'axios';

import http from './Http';

const apiBaseUrl = process.env.REACT_APP_API_URL;

/**
 * Retrieves all employees from the server.
 *
 * @returns {Promise<AxiosResponse<any, any>>} A Promise that resolves with the AxiosResponse from the server.
 */
export async function getEmployees(): Promise<AxiosResponse<any, any>> {
  const apiEndPoint = `${apiBaseUrl}/employees`;
  return await http.get(apiEndPoint);
}
