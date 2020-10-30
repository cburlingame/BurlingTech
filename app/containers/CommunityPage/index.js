/*
 * CommunityPage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default function CommunityPage() {
  return (
    <div>
      <Helmet>
        <title>Community</title>
        <meta
          name="description"
          content="Community / Social platform the Remote Education Network"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <List>
        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.chatHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.chatMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.groupsHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.groupsMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.messagingHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.messagingMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.imagesHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.imagesMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.feedHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.feedMessage} />
          </p>
        </ListItem>
      </List>
    </div>
  );
}
