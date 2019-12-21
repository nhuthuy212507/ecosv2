/*
 * Util Notification Messages
 *
 * This contains all the text for the Util notification
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.utils.Notification';

export default defineMessages({
  error405: {
    id: `${scope}.error405`,
    defaultMessage: 'Method not allow',
  },
  error500: {
    id: `${scope}.error500`,
    defaultMessage: 'Opps! Server is wrong',
  },
});
