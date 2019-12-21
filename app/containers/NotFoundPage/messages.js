/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.NotFoundPage';

export default defineMessages({
  goHome: {
    id: `${scope}.goHome`,
    defaultMessage: 'Go Home',
  },
  subTitle: {
    id: `${scope}.subTitle`,
    defaultMessage: 'Sorry, the page you visited does not exist.',
  },
});
