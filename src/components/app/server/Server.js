import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import FullSize from '../../platform/widgets/FullSize';
import GroupFrame from '../../platform/widgets/GroupFrame';
import GroupPane from './GroupPane';
import ServerListPane from './ServerListPane';
import ServerDetailPane from './ServerDetailPane';
import { theme } from './Theme';

export default function Server(props) {
  return (
    <ThemeProvider theme={theme}>
      <FullSize>
        <GroupFrame
          groupPane={<GroupPane groupList={props.groupList} currentGroup={props.currentGroup} setCurrentGroup={props.setCurrentGroup} />}
          listPane={<ServerListPane serverList={props.serverList} currentServer={props.currentServer} setCurrentServer={props.setCurrentServer} />}
          detailPane={<ServerDetailPane serverDetail={props.serverDetail} />}
        />
      </FullSize>
    </ThemeProvider>
  );
}

Server.propTypes = {
  groupList: PropTypes.object,
  currentGroup: PropTypes.object,
  setCurrentGroup: PropTypes.func,
  serverList: PropTypes.object,
  currentServer: PropTypes.object,
  setCurrentServer: PropTypes.func,
};
