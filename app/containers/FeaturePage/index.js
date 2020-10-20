/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Features page of the Remote Education Network"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <List>
        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.infoHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.infoMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.toolsHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.toolsMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.techHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.techMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.resourcesHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.resourcesMessage} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.communityHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.communityMessage} />
          </p>
        </ListItem>
      </List>
    </div>
  );
}
