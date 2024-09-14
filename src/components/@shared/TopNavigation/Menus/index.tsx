"use client"

import { Menu } from '@/components/@shared/TopNavigation';
import { useEffect, useMemo, useState } from 'react';
import { isMobileDevice } from '@/utils';
import MobileMenus from '@/components/@shared/TopNavigation/Menus/MobileMenus';
import DesktopMenus from '@/components/@shared/TopNavigation/Menus/DesktopMenus';

export interface MenusProps {
  menuList: Menu[]
}

const Menus = ({menuList}: MenusProps) => {
  const [useMobileDevice, setUseMobileDevice] = useState(false);

  useEffect(() => {
    setUseMobileDevice(isMobileDevice)
  },[])

  if (!useMobileDevice) {
    return <MobileMenus menuList={menuList} />
  }

  return <DesktopMenus />
};

export default Menus;
