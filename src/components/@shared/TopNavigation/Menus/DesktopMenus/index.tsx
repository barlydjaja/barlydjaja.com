import { MenusProps } from '@/components/@shared/TopNavigation/Menus';
import NavigationMenu from '@/components/@shared/TopNavigation/Menus/DesktopMenus/NavigationMenu';

const DesktopMenus = ({menuList}: MenusProps) => {
  console.log(menuList)
  return (
    <>
      <NavigationMenu menuList={menuList} />
      <div>
        desktop menu
      </div>
    </>
  );
};

export default DesktopMenus;
