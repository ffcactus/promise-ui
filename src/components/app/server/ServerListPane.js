import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import FullSize from '../../platform/widgets/FullSize';

const Main = styled(FullSize)`
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const ListHead = styled.div`
  min-height: ${p => p.theme.head.height};
  background-color: ${p => p.theme.head.color};
  flex: 0 1 auto;
`;

const ServerElementDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-clip: padding-box;
  border: 1px solid transparent;
  flex: 1 1 auto;
`;

const ServerElement = styled.div`
  min-height: 40px;
  background-color: ${p => p.selected ? p.theme.serverElement.backgroundColor.selected : p.theme.serverElement.backgroundColor.default};
  color: ${p => p.selected ? p.theme.serverElement.color.selected : p.theme.serverElement.color.default};
  display: flex;
  align-items: center;
  justify-content: center;
  background-clip: padding-box;
  border: 1px solid transparent;
  flex: 0 1 auto;
  cursor: pointer;
  :hover {
    background-color: ${({ theme, selected }) => selected ? theme.serverElement.backgroundColor.selected : theme.serverElement.hover};
  }
`;

const ServerElementTail = styled.div`
  background-color: ${p => p.theme.serverElement.backgroundColor.default};
  background-clip: padding-box;
  border: 1px solid transparent;
  flex: 1 1 auto;
`;

export default function ServerListPane(props) {
  return (
    <Main>
      <ListHead />
      <ServerElementDiv>
        {props.serverList && props.serverList.map(e =>
          <ServerElement
            key={e.Name}
            selected={props.currentServer ? e.Name === props.currentServer.Name : false}
            onClick={() => props.setCurrentServer(e)}
          >
            {e.Name}
          </ServerElement>
        )}
        <ServerElementTail />
      </ServerElementDiv>
      
    </Main>
  );
}

ServerListPane.propTypes = {
  serverList: PropTypes.object,
  currentServer: PropTypes.object,
  setCurrentServer: PropTypes.func,
};
