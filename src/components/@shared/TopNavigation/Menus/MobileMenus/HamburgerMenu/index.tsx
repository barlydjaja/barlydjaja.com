import styles from './style.module.css'
import { MenusProps } from '@/components/@shared/TopNavigation/Menus';

const HamburgerMenu = ({menuList}: MenusProps) => {
  return (
    <div className={styles.hamburgerMenu}>
      {menuList.map(menu => (
        <p key={menu.link}>
          {menu.name}
        </p>
      ))}
    </div>
  );
};

export default HamburgerMenu;
