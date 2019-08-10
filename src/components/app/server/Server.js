import React from 'react';
import { ThemeProvider } from 'styled-components';
import FullScreen from '../../platform/widgets/FullScreen';
import GroupFrame from '../../platform/widgets/GroupFrame';
import GroupPane from './GroupPane';
import ServerListPane from './ServerListPane';
import ServerDetailPane from './ServerDetailPane';
import { theme } from './Theme';

export default class Server extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <FullScreen>
          <GroupFrame
            groupPane={<GroupPane />}
            listPane={<ServerListPane />}
            detailPane={<ServerDetailPane />}
          />
        </FullScreen>
      </ThemeProvider>
    );
  }
}
