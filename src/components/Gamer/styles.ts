import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  border-bottom: 1px solid var(--separator);
  padding: 12px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

export const GameInner = styled.div`
  background: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
`;

export const Timer = styled.div`
  width: 100%;
  border-radius: 4px;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const ProgressBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 38px;
  background-color: var(--dark-background-four);
  padding: 8px;
  border-radius: 4px;
`;

export const ProgressView = styled.div`
  border-radius: 4px;
  position: relative;
  width: 100%;
  height: 22px;
  overflow: hidden;
`;

export const Progress = styled.div`
  width: calc(100% - 16px);
  z-index: 0;
  position: absolute;
  top: 50%;

  transform: translateY(-50%) translateX(0);
  bottom: 0;
  height: 22px;
  background-color: var(--red);
  border-radius: 4px;
  animation: 15000ms linear 0s 1 normal forwards running progress;
`;

export const TimeLeftRolling = styled.div`
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
  text-transform: capitalize;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimeLeft = styled.div`
  z-index: 1;
  text-transform: capitalize;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: 'RobotoMono' !important;
  }
`;

export const Recent = styled.div`
  width: 100%;
  text-align: left;
  position: relative;
  padding: 16px 24px;

  h3 {
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    color: var(--light-grey);
    text-transform: uppercase;
    margin: 0px;
  }
`;
export const RoulettePrevious = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  flex-grow: 1;
  position: relative;
  margin-top: 8px;
  width: 100%;
`;
export const Entries = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  flex-direction: row-reverse;
  overflow: hidden;
`;
export const Entry = styled.div`
  display: flex;
  margin-left: 0px;
  margin-right: 0px;
  cursor: pointer;
  position: relative;
  animation: 1s ease-in-out 0s 1 normal forwards running roulette-previous-in;
  transition: all 0.5s ease 0s;
`;
export const RouletteTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-background-four);
  height: 32px;
  width: 32px;
  border-radius: 4px;
  margin-right: 8px;

  &.white {
    background-color: rgb(255, 255, 255);
  }

  &.red {
    background-color: var(--red);
  }

  &.red > div {
    color: var(--rouge);
    border: 2px solid var(--rouge);
  }
`;
export const Number = styled.div`
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  text-align: center;
  font-size: 9px;
  letter-spacing: -0.5px;
  color: var(--light-grey);
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1px;
  padding: 0px;
  border: 2px solid var(--light-grey);
  border-radius: 50%;
`;
export const ButtonHistory = styled.div`
  display: flex;
`;
export const Fairness = styled.div`
  min-width: 32px;
  height: 32px;
  box-shadow: rgba(49, 110, 255, 0.08) 0px 0px 41px 0px,
    rgba(64, 64, 64, 0.05) 0px 2px 0.5px 0px;
  background-color: var(--light-background);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light-grey);
  border-radius: 4px;
  border: 1px solid var(--separator);
`;
