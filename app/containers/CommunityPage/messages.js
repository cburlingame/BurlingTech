/*
 * CommunityPage Messages
 *
 * This contains all the text for the CommunityPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'ren.containers.CommunityPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Community',
  },
  chatHeader: {
    id: `${scope}.chat.header`,
    defaultMessage: 'Chat',
  },
  chatMessage: {
    id: `${scope}.chat.message`,
    defaultMessage: `A central point of communication on the web for people involved with remote education and remote learning.`,
  },
  groupsHeader: {
    id: `${scope}.groups.header`,
    defaultMessage: 'Groups',
  },
  groupsMessage: {
    id: `${scope}.groups.message`,
    defaultMessage:
      'Create and or join groups gtargeting similar or the same issues and resources for remote education.',
  },
  messagingHeader: {
    id: `${scope}.messaging.header`,
    defaultMessage: 'Messaging',
  },
  messagingMessages: {
    id: `${scope}.messaging.message`,
    defaultMessage:
      'We utilize cutting edge technologies to create the next generation in web based learning capabilities.',
  },
  imagesHeader: {
    id: `${scope}.images.header`,
    defaultMessage: 'Resources',
  },
  imagesMessage: {
    id: `${scope}.images.message`,
    defaultMessage:
      'We will compile all of the resources that we can find into this one location so that the information is at your fingertips without your having to do all of the research.',
  },
  feedHeader: {
    id: `${scope}.feed.header`,
    defaultMessage: 'Social Feed',
  },
  feedMessage: {
    id: `${scope}.feed.message`,
    defaultMessage:
      'Send messages to everyone in your group, groups, or the entire community.',
  },
});
