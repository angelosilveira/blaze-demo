import { useEffect, useMemo, useState } from 'react';
import Roulette from '@components/Roulette';
import * as S from './styles';

export const Gamer = () => {
  const [timer, setTimer] = useState<string | number>('');
  const types = ['black', 'red'];

  useEffect(() => {
    const count = 15000;
    const delay = 20;

    const initTick = 0;
    function tick() {
      let remaining = (count - (now() - initTick)) / 1000;
      remaining = remaining >= 0 ? remaining : 0;
      const secs = remaining.toFixed(2);
      setTimer(secs);
      if (remaining) setTimeout(tick, delay);
    }

    setTimeout(tick, delay);
  }, []);

  function now() {
    return window.performance ? window.performance.now() : Date.now();
  }

  const RoulettePreviousMemo = useMemo(() => {
    return (
      <S.RoulettePrevious>
        <S.Entries>
          {Array.from(Array(25).keys()).map((n) => (
            <S.Entry key={n}>
              <S.RouletteTitle>
                <S.Box
                  className={`${
                    types[Math.floor(Math.random() * types.length)]
                  }`}
                >
                  <S.Number>{n}</S.Number>
                </S.Box>
              </S.RouletteTitle>
            </S.Entry>
          ))}
        </S.Entries>

        <S.ButtonHistory>
          <S.Fairness>
            <img src={'/images/round-history.svg'} alt="" />
          </S.Fairness>
        </S.ButtonHistory>
      </S.RoulettePrevious>
    );
  }, []);

  return (
    <S.Wrapper>
      <S.Content>
        <S.GameInner>
          <S.Timer>
            {timer < 0.02 && <S.TimeLeftRolling>Rolling...</S.TimeLeftRolling>}
            {timer > 0.02 && (
              <S.ProgressBar>
                <S.ProgressView>
                  <S.Progress
                    style={{
                      transform: `translateY(-50%) translateX(-${
                        (100 * 13600) / Number(timer) / 13600
                      }%)`,
                    }}
                  />
                </S.ProgressView>
                <S.TimeLeft>
                  <>
                    Rolling in
                    <span>{timer < 10 ? '0' + timer : timer}</span>
                  </>
                </S.TimeLeft>
              </S.ProgressBar>
            )}
          </S.Timer>
          <Roulette timer={timer} />
        </S.GameInner>
      </S.Content>

      <S.Recent>
        <h3>Previous Rolls</h3>
        {RoulettePreviousMemo}
      </S.Recent>
    </S.Wrapper>
  );
};
