import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHistory, FaVolumeUp } from 'react-icons/fa';

import { Button } from '@components/Button';
import * as S from './styles';

export const Controller = () => {
  const [active, setActive] = useState(true);
  return (
    <S.Wrapper>
      <S.Body>
        <S.TabNav>
          <S.TabLabel selected={active}>Normal</S.TabLabel>
          <S.TabLabel>Auto</S.TabLabel>
        </S.TabNav>

        <S.InputsWrapper>
          <S.BetInputRow>
            <S.BalanceInputField>
              <S.InputFieldWrapper>
                <span>Amount</span>
                <input type="number" />
              </S.InputFieldWrapper>
              <S.Emblem>R$</S.Emblem>
            </S.BalanceInputField>
            <Button className="half">½</Button>
            <Button className="double">2x</Button>
          </S.BetInputRow>

          <S.InputSide>
            <span>Select Color</span>
            <S.InputWrapper>
              <S.InputColor className="red selected">
                <div>x2</div>
              </S.InputColor>

              <S.InputColor className="white">
                <div>x14</div>
              </S.InputColor>

              <S.InputColor className="black">
                <div>x2</div>
              </S.InputColor>
            </S.InputWrapper>
          </S.InputSide>
        </S.InputsWrapper>

        <S.PlaceBet>
          <Button variant="red" disabled>
            Enter Round
          </Button>
        </S.PlaceBet>
      </S.Body>

      <S.CassinoExtra>
        <S.FirstColumn>
          <Link to="#">
            <Button>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6H0V1C0 0.4 0.4 0 1 0H6V2H2V6Z"
                  fill="#8C9099"
                ></path>
                <path
                  d="M16 6H14V2H10V0H15C15.6 0 16 0.4 16 1V6Z"
                  fill="#8C9099"
                ></path>
                <path
                  d="M15 16H10V14H14V10H16V15C16 15.6 15.6 16 15 16Z"
                  fill="#8C9099"
                ></path>
                <path
                  d="M6 16H1C0.4 16 0 15.6 0 15V10H2V14H6V16Z"
                  fill="#8C9099"
                ></path>
              </svg>
            </Button>
          </Link>
        </S.FirstColumn>

        <S.SecondColumn>
          <div className="grey-important">
            <Button>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z"
                  fill="white"
                ></path>
              </svg>
            </Button>
          </div>

          <S.Volume>
            <Button>
              <FaVolumeUp />
            </Button>
          </S.Volume>

          <S.FairnessModalLink>
            <FaHistory />
          </S.FairnessModalLink>

          <S.Stats>
            <Button>
              <svg
                id="Layer_2"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#8c9099"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs></defs>
                <g id="Layer_1-2">
                  <g>
                    <polygon
                      className="cls-1"
                      points="5.6 11.86 5.6 26.68 0 26.68 0 16.29 5.56 11.83 5.6 11.86"
                    ></polygon>
                    <polygon
                      className="cls-1"
                      points="14.55 15.68 14.55 26.68 8.95 26.68 8.95 14.66 12.12 17.3 14.55 15.68"
                    ></polygon>
                    <polygon
                      className="cls-1"
                      points="23.5 9.89 23.5 26.68 17.9 26.68 17.9 13.44 23.23 9.89 23.5 9.89"
                    ></polygon>
                    <polygon
                      className="cls-1"
                      points="23.5 0 23.5 6.73 15.11 12.32 12.68 13.94 9.51 11.3 6.15 8.51 6.12 8.47 .56 12.94 0 13.38 0 6.21 6.19 1.24 12.54 6.54 13.06 6.96 13.7 6.54 23.5 0"
                    ></polygon>
                  </g>
                </g>
              </svg>
            </Button>
          </S.Stats>
        </S.SecondColumn>
      </S.CassinoExtra>
    </S.Wrapper>
  );
};
