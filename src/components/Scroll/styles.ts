import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 215px);
  margin-right: -15px;
  flex: 1;

  .cover-bar {
    position: absolute;
    background: #f4f4f4;
    height: 100%;
    top: 0;
    right: 0;
    width: 0.4em;
    transition: all 0.5s;
    opacity: 1;
    pointer-events: none;
  }

  &:hover .cover-bar {
    opacity: 0;
    transition: all 0.5s;
  }
`;
export const ScrollBox = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  overflow-y: scroll;
  height: 100%;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 0.4em;
  }
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    overflow: visible;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
  }
`;
