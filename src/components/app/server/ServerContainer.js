import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Server from './Server';

export default function ServerContainer(props) {
  const [currentGroup, setCurrentGroup] = useState();
  const [groupList, setGroupList] = useState();
  const [serverList, setServerList] = useState();
  const [currentServer, setCurrentServer] = useState();

  // Get all the server groups.
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get('http://localhost:3000/redfish/v1/rich/ServerGroups', {
          headers: {
            Authorization: 'Basic cm9vdFJlZGZpc2g6TWFjaGluZUAxMjM='
          }
        })
        .then(response => {
          if (response.status === 200) {
            setGroupList(response.data.Members)
          }
        })
        .catch(err => console.log(err));
    }, 1000);
    return () => clearInterval(interval);
  })

  // Get the server list based on the selected server group, or the default one if no server group is selected.
  useEffect(() => {
    console.info(currentGroup)
    if (!groupList) {
      return
    }
    let groupId = ""
    if (currentGroup) {
      groupId = currentGroup.URI.substring("/redfish/v1/rich/ServerGroups/".length)
    } else {
      for (const v of groupList) {
        if (v.Name === "all") {
          groupId = v.URI.substring("/redfish/v1/rich/ServerGroups/".length)
          break
        }
      }
    }
    if (groupId === "") {
      return
    }
    const interval = setInterval(() => {
      axios
        .get('http://localhost:3000/redfish/v1/rich/SSGs', {
          headers: {
            Authorization: 'Basic cm9vdFJlZGZpc2g6TWFjaGluZUAxMjM='
          },
          params: {
            filter: 'ServerGroupID eq \'' + groupId + '\''
          }
        })
        .then(response => {
          if (response.status === 200) {
            setServerList(response.data.Members.map(v => {
              return { Name: v.ServerURI }
            }))
          }
        })
        .catch(err => console.log(err));
    }, 1000);
    return () => clearInterval(interval);
  }, [currentGroup, groupList])

  return (
    <Server
      groupList={groupList}
      currentGroup={currentGroup}
      setCurrentGroup={setCurrentGroup}
      serverList={serverList}
      currentServer={currentServer}
      setCurrentServer={setCurrentServer}
    />
  );
}
