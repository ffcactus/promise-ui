import styled from 'styled-components';

const FullScreen = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: ${p => p.theme.backgroundColor};
`;

export default FullScreen;
