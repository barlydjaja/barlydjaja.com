import { MenusProps } from '@/components/@shared/TopNavigation/Menus';
import NavigationMenu from '@/components/@shared/TopNavigation/Menus/DesktopMenus/NavigationMenu';
import Link from 'next/link';

const DesktopMenus = ({menuList}: MenusProps) => {
  console.log(menuList)
  return (
    <>
      <NavigationMenu menuList={menuList} />
      <Link href="https://www.linkedin.com/in/barly-djaja/" target="_blank" className="button-accent flex items-center justify-center rounded-full py-3 px-6 mb-2.5 text-base font-medium">
        Contact Me
      </Link>
    </>
  );
};

export default DesktopMenus;
