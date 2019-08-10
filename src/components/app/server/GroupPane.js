import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FullScreen from '../../platform/widgets/FullScreen';

const Main = styled(FullScreen)`
  overflow: auto;
`;

const GroupElement = styled.div`
  height: 40px;
`;

export default function GroupPane() {
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get('https://localhost:3000/redfish/v1/rich/ServerGroups', {
          headers: {
            Authorization: 'Basic cm9vdFJlZGZpc2g6TWFjaGluZUAxMjM='
          }
        })
        .then(response => {
          console.info(response);
        })
        .catch(err => console.log(err));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Main>
      {[...Array(50).keys()].map(i => (
        <GroupElement key={i}>Group + {i}</GroupElement>
      ))}
    </Main>
  );
}
