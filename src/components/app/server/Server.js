import React from 'react';
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
          groupPane={<GroupPane groupList={props.groupList}/>}
          listPane={<ServerListPane serverList={props.serverList}/>}
          detailPane={<ServerDetailPane serverDetail={props.serverDetail}/>}
        />
      </FullSize>
    </ThemeProvider>
  );
}
