import { MenusProps } from '@/components/@shared/TopNavigation/Menus';
import { useState } from 'react';
import HamburgerIcon from '@/components/@shared/TopNavigation/Menus/MobileMenus/HamburgerIcon';
import HamburgerMenu from '@/components/@shared/TopNavigation/Menus/MobileMenus/HamburgerMenu';

const MobileMenus = ({menuList}: MenusProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleShowMenu = () => {
    setShowMenu(prev => !prev);
  }

  return (
    <>
      <HamburgerIcon width={40} height={30} onClick={handleToggleShowMenu}/>
      {showMenu && (
        <>
          <div className='overlay' onClick={handleToggleShowMenu}/>
          <HamburgerMenu menuList={menuList} />
        </>
      )}
    </>
  );
};

export default MobileMenus;
