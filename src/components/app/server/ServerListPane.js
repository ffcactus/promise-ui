import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FullSize from '../../platform/widgets/FullSize';

const Main = styled(FullSize)`
  overflow: auto;
  display: flex;
  flex-direction: column;
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
  const [serverList] = useState(props.serverList ? props.serverList : []);
  const [selected, setSelected] = useState();
  return (
    <Main>
      {serverList.map(e =>
        <ServerElement
          key={e.Name}
          selected={e.Name === selected}
          onClick={() => setSelected(e.Name)}
        >
          {e.Name}
        </ServerElement>
      )}
      <ServerElementTail />
    </Main>
  );
}
