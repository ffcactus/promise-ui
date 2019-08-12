import React from 'react';
import { storiesOf } from '@storybook/react';
import Server from '../../../components/app/server/Server';

storiesOf('App/Server', module).add('default', () => {
  const groupList = [{ Name: "Group 1" }, { Name: "Group 2" }, { Name: "Group 3" }, { Name: "Group 4" }, { Name: "Group 5" }];
  const serverList=[{ Name: "Server 1" }, { Name: "Server 2" }, { Name: "Server 3" }, { Name: "Server 4" }, { Name: "Server 5" }, { Name: "Server 6" }, { Name: "Server 7" }, { Name: "Server 8" }, { Name: "Server 9" }, { Name: "Server 10" }, { Name: "Server 11" }];

  return <Server groupList={groupList} serverList={serverList}/>;
});
