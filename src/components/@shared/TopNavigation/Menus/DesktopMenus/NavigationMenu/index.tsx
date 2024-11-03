import { MenusProps } from '@/components/@shared/TopNavigation/Menus';
import cx from 'classnames';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavigationMenu = ({menuList}: MenusProps) => {
  const pathname = usePathname()
  return (
    <div className="flex items-center justify-between py-2 px-12 border rounded-full bg-[#222222] shadow-inner backdrop-blur-2xl background-white gap-10">
      {menuList.map(menu => {
        const isActivePath = pathname === menu.link

        return (
          <Link
            key={menu.link}
            href={menu.link}
            className={cx({'underline underline-offset-8 font-bold': isActivePath})}
          >
            {menu.name}
          </Link>
        )
      })}
    </div>
  );
};

export default NavigationMenu;
