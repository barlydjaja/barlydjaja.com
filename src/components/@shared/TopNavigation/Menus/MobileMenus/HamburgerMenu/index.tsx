import styles from './style.module.css'
import { MenusProps } from '@/components/@shared/TopNavigation/Menus';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cx from 'classnames';

const HamburgerMenu = ({menuList}: MenusProps) => {
  const pathname = usePathname()
  return (
    <div className={styles.hamburgerMenu}>
      {menuList.map(menu => (
        <p key={menu.link}>
          <Link
            href={menu.link}
            className={cx(
              {'underline underline-offset-8': pathname === menu.link})}
          >
            {menu.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default HamburgerMenu;
