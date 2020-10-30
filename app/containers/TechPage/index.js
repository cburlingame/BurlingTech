/*
 * TechPage
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

export default function TechPage() {
  return (
    <div>
      <Helmet>
        <title>Technology</title>
        <meta
          name="description"
          content="Remote Education Network Technologies"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <List>
        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.tech01Header} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.tech01Message} />
          </p>
        </ListItem>

        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.tech02Header} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.tech02Message} />
          </p>
        </ListItem>
      </List>
    </div>
  );
}
