/*
 * ToolsPage Messages
 *
 */
import { defineMessages } from 'react-intl';

export const scope = 'ren.containers.ToolsPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Tools',
  },
  tool01Header: {
    id: `${scope}.tool01.header`,
    defaultMessage: 'Tool 01',
  },
  tooll01Message: {
    id: `${scope}.tool01.message`,
    defaultMessage: `A description for tool 01`,
  },
  tool02Header: {
    id: `${scope}.tool02.header`,
    defaultMessage: 'Tool 02',
  },
  tool02Message: {
    id: `${scope}.tool02.message`,
    defaultMessage:
      'A description for tool 02',
  },
});
