/*
 * SideBarProvider Messages
 *
 * This contains all the text for the SideBarProvider container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SideBarProvider';

export default defineMessages({
  dashboard: {
    id: `${scope}.dashboard`,
    defaultMessage: 'Dashboard',
  },
  customer: {
    id: `${scope}.customer`,
    defaultMessage: 'Customer',
  },
});
