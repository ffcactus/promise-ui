import React from 'react';
import { storiesOf, forceReRender } from '@storybook/react';
import Server from '../../../components/app/server/Server';

const groupList = [{ Name: "Group 1" }, { Name: "Group 2" }, { Name: "Group 3" }];
let currentGroup;
let currentServer;
let serverList;
const ssg = {
  "Group 1": [{ Name: "Server 1" }, { Name: "Server 2" }],
  "Group 2": [{ Name: "Server 3" }, { Name: "Server 4" }],
  "Group 3": [{ Name: "Server 5" }, { Name: "Server 6" }],
};

const setCurrentGroup = (group) => {
  currentGroup = group;
  serverList = ssg[currentGroup.Name];
  forceReRender();
}

const setCurrentServer = (server) => {
  currentServer = server;
  forceReRender();
}

storiesOf('App/Server', module).add('default', () => {
  return <Server
    groupList={groupList}
    currentGroup={currentGroup}
    setCurrentGroup={setCurrentGroup}
    serverList={serverList}
    currentServer={currentServer}
    setCurrentServer={setCurrentServer}
  />;
});
