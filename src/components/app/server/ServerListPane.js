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
  flex-basis: 0;
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
  flex-basis: 0;
  cursor: pointer;
  :hover {
    background-color: ${({ theme, selected }) => selected ? theme.serverElement.backgroundColor.selected : theme.serverElement.hover};
  }
`;

const ServerElementTail = styled.div`
  background-color: ${p => p.theme.serverElement.backgroundColor.default};
  height: 100%;
  background-clip: padding-box;
  border: 1px solid transparent;
  flex-basis: auto;
`;

export default function ServerListPane(props) {
  return (
    <Main>
      <ListHead/>
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
    </Main>
  );
}

ServerListPane.propTypes = {
  serverList: PropTypes.object,
  currentServer: PropTypes.object,
  setCurrentServer: PropTypes.func,
};
