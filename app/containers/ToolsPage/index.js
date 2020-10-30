/*
 * ToolsPage
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

export default function ToolsPage() {
  return (
    <div>
      <Helmet>
        <title>Tools</title>
        <meta
          name="description"
          content="Custom built tools to enable and enhance the remote education experience."
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <List>
        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.tool01Header} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.tool01Message} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.tool02Header} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.tool02Message} />
          </p>
        </ListItem>
      </List>
    </div>
  );
}
