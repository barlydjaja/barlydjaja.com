"use client"

import { Menu } from '@/components/@shared/TopNavigation';
import { useMemo } from 'react';
import { isMobileDevice } from '@/utils';
import MobileMenus from '@/components/@shared/TopNavigation/Menus/MobileMenus';
import DesktopMenus from '@/components/@shared/TopNavigation/Menus/DesktopMenus';

export interface MenusProps {
  menuList: Menu[]
}

const Menus = ({menuList}: MenusProps) => {
  const useMobileDevice = useMemo(isMobileDevice, []);

  if (useMobileDevice) {
    return <MobileMenus menuList={menuList} />
  }

  return <DesktopMenus />
};

export default Menus;
