"use client"

import { Menu } from '@/components/@shared/TopNavigation';
import { useEffect, useState } from 'react';
import { isMobileDevice } from '@/utils';
import MobileMenus from '@/components/@shared/TopNavigation/Menus/MobileMenus';
import DesktopMenus from '@/components/@shared/TopNavigation/Menus/DesktopMenus';

export interface MenusProps {
  menuList: Menu[]
}

const Menus = ({menuList}: MenusProps) => {
  const [useMobileDevice, setUseMobileDevice] = useState(true);

  useEffect(() => {
    setUseMobileDevice(isMobileDevice)
  },[])

  if (useMobileDevice) {
    return <MobileMenus menuList={menuList} />
  }

  return <DesktopMenus menuList={menuList} />
};

export default Menus;
