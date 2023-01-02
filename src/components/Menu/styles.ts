import styled, { css } from 'styled-components';

type MenuProps = {
  isOpen: boolean;
};

export const MenuButton = styled.button`
  ${({ theme }) => css`
    display: flex;

    svg {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`;

export const Submenu = styled.nav<MenuProps>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    height: 100%;
    width: 320px;
    right: 0;
    z-index: 100;
    bottom: 0;
    background-color: ${theme.colors.black};
    transition: transform 0.2s ease-in;
    ${!isOpen
      ? css`
          transform: translateX(100%);
        `
      : css`
          transform: translateX(0);
        `}
  `}
`;

export const SubmenuItem = styled.div`
  ${({ theme }) => css`
    padding: 10px 20px;
    border-top: 0.5px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;

    &:first-child {
      border: 0;
    }

    svg {
      margin-right: 5px;
    }

    a,
    svg {
      color: ${theme.colors.white};
    }
  `}
`;

export const ButtonClose = styled.div`
  ${({ theme }) => css`
    text-align: right;
    padding: 0px 5px;

    svg {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`;
