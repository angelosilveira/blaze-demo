import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 100%;

  .selector {
    width: 4px;
    background: white;
    left: 50%;
    height: 150px;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 200;
    top: 48%;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 96px;
  margin-top: 74px;
  transition: all 1s ease 0s;

  .wheel {
    display: flex;
  }

  .wheel .row {
    display: flex;
  }

  .wheel .row .card {
    height: 75px;
    width: 75px;
    margin: 3px;
    border-radius: 8px;
    border-bottom: 3px solid rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5em;
  }

  .card.red {
    background: #f95146;
  }

  .card.black {
    background: #2d3035;
  }

  .card.green {
    background: #00c74d;
  }
`;
