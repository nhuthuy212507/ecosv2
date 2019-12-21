/*
 * CustomizerProvider Messages
 *
 * This contains all the text for the CustomizerProvider component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.CustomizerProvider';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Theme Customizer',
  },
  darkTheme: {
    id: `${scope}.darkTheme`,
    defaultMessage: 'Dark Theme',
  },
  collapsedMenu: {
    id: `${scope}.collapsedMenu`,
    defaultMessage: 'Collapsed Menu',
  },
});
