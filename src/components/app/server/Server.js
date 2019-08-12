import React from 'react';
import { ThemeProvider } from 'styled-components';
import FullSize from '../../platform/widgets/FullSize';
import GroupFrame from '../../platform/widgets/GroupFrame';
import GroupPane from './GroupPane';
import ServerListPane from './ServerListPane';
import ServerDetailPane from './ServerDetailPane';
import { theme } from './Theme';

export default class Server extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <FullSize>
          <GroupFrame
            groupPane={<GroupPane />}
            listPane={<ServerListPane />}
            detailPane={<ServerDetailPane />}
          />
        </FullSize>
      </ThemeProvider>
    );
  }
}
