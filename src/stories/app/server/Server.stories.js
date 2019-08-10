import React from 'react';
import { storiesOf } from '@storybook/react';
import Server from '../../../components/app/server/Server';

storiesOf('App/Server', module).add('default', () => {
  return <Server />;
});
