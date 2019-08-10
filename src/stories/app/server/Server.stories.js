import React from 'react';
import { storiesOf } from '@storybook/react';
import Server from '../../../components/app/server/Server';
import Wallpaper from '../../../components/platform/home/Wallpaper';

storiesOf('App/Server', module).add('default', () => {
  return (
    <Wallpaper>
      <Server />
    </Wallpaper>
  );
});
