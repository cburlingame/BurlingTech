/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'ren.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
  tools: {
    id: `${scope}.tools`,
    defaultMessage: 'Tools',
  },
  tech: {
    id: `${scope}.tech`,
    defaultMessage: 'Tech',
  },
  community: {
    id: `${scope}.community`,
    defaultMessage: 'Community',
  },
});
