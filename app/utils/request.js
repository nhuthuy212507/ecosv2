import React from 'react';
import axios from 'axios';
import { FormattedMessage } from 'react-intl';
import { toast } from 'react-toastify';
import history from 'utils/history';
import { apiUrl } from '../configValue';
import messages from './messages';

/**
 * Requests a URL, returning a promise
 *
 * @param  {object} [options] The options we want to pass to "axios"
 *
 * @return {object}           The response data
 */
export default async function request(options) {
  axios.defaults.headers.common.Authorization = localStorage.getItem('token')
    ? `Bearer ${localStorage.getItem('token')}`
    : '';
  axios.defaults.headers.get['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded';

  try {
    const response = await axios({
      baseURL: apiUrl,
      ...options,
    });
    return response.data;
  } catch (error) {
    if (options.method === 'get') {
      switch (error.response.status) {
        case 401:
          history.push('/login', { redirect: true });
          return null;
        case 404:
          history.push('/404');
          return null;
        case 405:
          history.push('/method-not-allow');
          return null;
        case 500:
          history.push('/server-wrong');
          return null;
        default:
          return Promise.reject(error);
      }
    } else {
      switch (error.response.status) {
        case 401:
          history.push('/login', { redirect: true });
          return null;
        case 405:
          toast.error(<FormattedMessage {...messages.error405} />);
          return null;
        case 500:
          toast.error(<FormattedMessage {...messages.error500} />);
          return null;
        default:
          return Promise.reject(error);
      }
    }
  }
}
