/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.FeaturePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Features',
  },
  infoHeader: {
    id: `${scope}.info.header`,
    defaultMessage: 'Information',
  },
  infoMessage: {
    id: `${scope}.info.message`,
    defaultMessage: `A central point of information on the web for people involved with remote education and remote learning.`,
  },
  toolsHeader: {
    id: `${scope}.tools.header`,
    defaultMessage: 'Tools',
  },
  toolsMessage: {
    id: `${scope}.tools.message`,
    defaultMessage:
      'We build sytems and tools designed to enable remote learning and bring the classroom experience online.',
  },
  techHeader: {
    id: `${scope}.tech.header`,
    defaultMessage: 'Technology',
  },
  techMessages: {
    id: `${scope}.tech.message`,
    defaultMessage:
      'We utilize cutting edge technologies to create the next generation in web based learning capabilities.',
  },
  resourcesHeader: {
    id: `${scope}.resources.header`,
    defaultMessage: 'Resources',
  },
  resourcesMessage: {
    id: `${scope}.resources.message`,
    defaultMessage:
      'We will compile all of the resources that we can find into this one location so that the information is at your fingertips without your having to do all of the research.',
  },
  communityHeader: {
    id: `${scope}.community.header`,
    defaultMessage: 'Community',
  },
  communityMessage: {
    id: `${scope}.community.message`,
    defaultMessage:
      'Home of the remote education community.. where educators, learners, institutions, organizations, and groups can come to aquire tools, research information, trade info and assist eachother, communicate and excel.',
  },
});
