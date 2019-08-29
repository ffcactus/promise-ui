import React from 'react';
import styled from 'styled-components';
import FullSize from '../../platform/widgets/FullSize';

const Main = styled(FullSize)`
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const DetailHead = styled.div`
  min-height: ${p => p.theme.head.height};
  background-color: ${p => p.theme.head.color};
  flex-basis: 0;
`;

const Detail = styled.div`
  background-color: ${p => p.theme.serverDetail.backgroundColor};
  flex-basis: auto;
`;

const OverView = styled.div`
  min-height: 500px;
`;

const Processor = styled.div`
  min-height: 500px;
`;

const Memory = styled.div`
  min-height: 500px;
`;

const Drive = styled.div`
  min-height: 500px;
`;

export default function ServerDetailPane(props) {
  return (
    <Main>
      <DetailHead />
      <Detail>
        <OverView>
          <a id="overview">Overview</a>
          <p>This is the overview</p>
        </OverView>
        <Processor>
          <a id="processor">Processor</a>
          <p>This is the details about processor.</p>
        </Processor>
        <Memory>
          <a id="memory">Memory</a>
          <p>This is the details about memory.</p>
        </Memory>
        <Drive>
          <a id="drive">Drive</a>
          <p>This is the details about drive.</p>
        </Drive>
      </Detail>
    </Main>
  );
}
