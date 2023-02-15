import styled, { css } from 'styled-components';

type TabLabelProps = {
  selected?: boolean;
};

export const Wrapper = styled.main`
  border-radius: 4px 0 0 4px;
  background-color: var(--background-two);
  width: 325px;
  padding: 16px 24px;
  flex-shrink: 0;
  border-right: 1px solid var(--separator);

  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1;
`;

export const TabNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--separator);
  background-color: var(--light-background);
  height: 48px;
  border-radius: 4px;
  padding: 3px;
  margin-bottom: 16px;
  overflow: hidden;

  > div {
  }
`;

export const TabLabel = styled.div<TabLabelProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: var(--light-grey);
  text-transform: capitalize;
  cursor: pointer;
  ${(props) =>
    props.selected &&
    css`
      border-radius: 4px;
      background-color: var(--background);
      color: var(--white);
    `}
`;

export const InputsWrapper = styled.div``;

export const BetInputRow = styled.div`
  align-items: center;
  margin-bottom: 16px;
  display: grid;
  grid-template-columns: auto 48px 48px;
  justify-content: space-between;
  display: flex;

  button {
    height: 48px;
    border-radius: 4px;
    padding: 0;
    width: 20%;
  }
`;

export const BalanceInputField = styled.div`
  position: relative;
  min-width: 0;
`;

export const InputFieldWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  background: var(--background);
  border: 1px solid transparent;
  height: 48px;
  border-radius: 4px;
  flex-direction: column;
  align-items: flex-start !important;
  padding: 5px 16px;
  display: flex;
  justify-content: center;
  cursor: text;

  span {
    font-size: 10px;
    height: 15px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: var(--light-grey);
    text-transform: capitalize;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: left;
    transition: all 0.2s ease;
    pointer-events: none;
  }

  input {
    background-color: initial;
    padding: 0;
    font-size: 12px;
    width: 90%;
  }
`;

export const Emblem = styled.div`
  position: absolute;
  font-weight: 700;
  line-height: 1.14;
  letter-spacing: normal;
  color: var(--light-grey);
  right: 16px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
`;

export const InputSide = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 24px;

  span {
    color: var(--light-grey);
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 6px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  position: relative;
`;

export const InputColor = styled.div`
  width: calc(33.33333% - 2.66667px);
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  color: var(--red);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 4px;

  &.red {
    background-color: var(--red);
    color: var(--white);
  }

  &.red.selected,
  &.black.selected {
    border: 2px solid #fff;
  }

  &.white {
    background-color: var(--white);
    color: var(--red);
    margin: 0 7px;
  }

  &.white.selected {
    border: 2px solid var(--red);
  }

  &.black {
    background-color: var(--charcoal-grey);
    color: var(--white);
  }

  &.selected > div {
    border: 2px solid var(--background);
    border-radius: 1px;
  }

  > div {
    height: 48px;
    width: 100%;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PlaceBet = styled.div`
  button {
    height: 48px;
    font-size: 14px;
  }
`;

export const CassinoExtra = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;
  width: 100%;
  flex-wrap: nowrap;
  overflow: hidden;

  button {
    font-size: 0.67em !important;
    font-weight: 600 !important;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.4;
    text-align: center;
    color: var(--light-grey);
    padding: 0 4px !important;
    justify-content: center;
    height: 32px;
  }
`;

export const FirstColumn = styled.div`
  display: flex;
  align-items: center;

  a {
    flex-grow: 1;
  }
`;

export const SecondColumn = styled.div`
  display: flex;
  grid-gap: 10px;
  gap: 10px;
`;

export const Volume = styled.div`
  font-size: 24px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const FairnessModalLink = styled.div`
  min-width: 32px;
  height: 32px;
  border-radius: 4px;
  box-shadow: 0 0 41px 0 rgb(49 110 255 / 8%), 0 2px 0.5px 0 rgb(64 64 64 / 5%);
  border: 1px solid var(--separator);
  background-color: var(--light-background);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light-grey);
`;

export const Stats = styled.div`
  width: 32px;
  height: 32px;
`;
