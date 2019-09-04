import React from 'react';
import { storiesOf, forceReRender } from '@storybook/react';
import Server from '../../../components/app/server/Server';

const groupCount = 10
const groupList = [...Array(groupCount).keys()].map(i => {return { Name: "Group " + (i + 1)}});
let currentGroup;
let currentServer;
let serverList;
const ssg = {
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

function prepare() {
  [...Array(groupCount).keys()].forEach(v => {
    ssg["Group " + (v + 1)] = [...Array(100).keys()].map(i => {return {Name: "Server " + ((i + 1) + v * 100)}})
  })
}

storiesOf('App/Server/Layout', module).add('default', () => {
  prepare();
  return <Server
    groupList={groupList}
    currentGroup={currentGroup}
    setCurrentGroup={setCurrentGroup}
    serverList={serverList}
    currentServer={currentServer}
    setCurrentServer={setCurrentServer}
  />;
});
