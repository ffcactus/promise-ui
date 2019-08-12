import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FullSize from '../../platform/widgets/FullSize';

const Main = styled(FullSize)`
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const GroupElement = styled.div`
  min-height: 40px;
  background-color: ${p => p.selected ? p.theme.groupElement.backgroundColor.selected : p.theme.groupElement.backgroundColor.default};
  color: ${p => p.selected ? p.theme.groupElement.color.selected : p.theme.groupElement.color.default}
  display: flex;
  align-items: center;
  justify-content: center;
  background-clip: padding-box;
  border: 1px solid transparent;
  flex-basis: 0
  cursor: pointer;
  :hover {
    background-color: ${({ theme, selected }) => selected ? theme.groupElement.backgroundColor.selected : theme.groupElement.hover};
  }
`;

const GroupElementTail = styled.div`
  background-color: ${p => p.theme.groupElement.backgroundColor.default};
  height: 100%;
  background-clip: padding-box;
  border: 1px solid transparent;
  flex-basis: auto;
`

export default function GroupPane() {
  const [groupList, setGroupList] = useState([]);
  const [selected, setSelected] = useState();

  useEffect(() => {
    // const interval = setInterval(() => {
    //   axios
    //     .get('http://localhost:3000/redfish/v1/rich/ServerGroups', {
    //       headers: {
    //         Authorization: 'Basic cm9vdFJlZGZpc2g6TWFjaGluZUAxMjM='
    //       }
    //     })
    //     .then(response => {
    //       if (response.status === 200) {
    //         console.info(response);
    //         setGroupList(response.data.Members)
    //       }
    //     })
    //     .catch(err => console.log(err));
    // }, 1000);
    // return () => clearInterval(interval);
    setGroupList([
      {
        Name: "Group 1"
      },
      {
        Name: "Group 2"
      },
      {
        Name: "Group 3"
      },
      {
        Name: "Group 4"
      },
      {
        Name: "Group 5"
      },
    ])
  }, []);

  return (
    <Main>
      {groupList.map(e =>
        <GroupElement
          key={e.Name}
          selected={e.Name === selected}
          onClick={() => setSelected(e.Name)}
        >
          {e.Name}
        </GroupElement>
      )}
      <GroupElementTail />

    </Main>
  );
}
