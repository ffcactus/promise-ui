import React from 'react';
import { storiesOf, forceReRender } from '@storybook/react';
import Server from '../../../components/app/server/Server';
import AddServerDialog from '../../../components/app/server/AddServerDialog';

storiesOf('App/Server/Add', module).add('add server', () => {
  return <AddServerDialog/>;
});
