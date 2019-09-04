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

const GroupHead = styled.div`
  min-height: ${p => p.theme.head.height};
  background-color: ${p => p.theme.head.color};
  flex-grow: 0;
`;

const GroupElementDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-clip: padding-box;
  border: 1px solid transparent;
  flex-grow: 1;
`;

const GroupElement = styled.div`
  min-height: 40px;
  background-color: ${p => p.selected ? p.theme.groupElement.backgroundColor.selected : p.theme.groupElement.backgroundColor.default};
  color: ${p => p.selected ? p.theme.groupElement.color.selected : p.theme.groupElement.color.default};
  display: flex;
  align-items: center;
  justify-content: center;
  background-clip: padding-box;
  border: 1px solid transparent;
  flex-grow: 0;
  cursor: pointer;
  :hover {
    background-color: ${({ theme, selected }) => selected ? theme.groupElement.backgroundColor.selected : theme.groupElement.hover};
  }
`;

const GroupElementTail = styled.div`
  background-color: ${p => p.theme.groupElement.backgroundColor.default};
  background-clip: padding-box;
  border: 1px solid transparent;
  flex-grow: 1;
`;

export default function GroupPane(props) {
  return (
    <Main>
      <GroupHead />
      <GroupElementDiv>
        {props.groupList && props.groupList.map(e =>
          <GroupElement
            key={e.Name}
            selected={props.currentGroup ? e.Name === props.currentGroup.Name : false}
            onClick={() => props.setCurrentGroup(e)}
          >
            {e.Name}
          </GroupElement>
        )}
        <GroupElementTail/>
      </GroupElementDiv>

    </Main>
  );
}

GroupPane.propTypes = {
  groupList: PropTypes.object,
  currentGroup: PropTypes.object,
  setCurrentGroup: PropTypes.func,
};

