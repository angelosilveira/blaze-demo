import { useState } from 'react';
import { BiMenu, BiUser, BiGridAlt, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import * as S from './styles';

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <S.MenuButton onClick={() => setOpen(true)}>
        <BiMenu aria-label="menu" />
      </S.MenuButton>

      <S.Submenu isOpen={open} aria-hidden={!open}>
        <S.ButtonClose>
          <button onClick={() => setOpen(false)}>
            <BiX />
          </button>
        </S.ButtonClose>

        <S.SubmenuItem>
          <BiGridAlt />
          <Link to="/reports">Dashboard</Link>
        </S.SubmenuItem>
        <S.SubmenuItem>
          <BiUser />
          <Link to="/">Clientes</Link>
        </S.SubmenuItem>
      </S.Submenu>
    </>
  );
};

export default Menu;
