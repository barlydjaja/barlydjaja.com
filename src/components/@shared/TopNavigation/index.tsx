
import Menus from '@/components/@shared/TopNavigation/Menus';
import HomeLink from '@/components/@shared/TopNavigation/HomeLink';

export interface Menu {
  name: string;
  link: string;
}

const menuList: Menu[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About me',
    link: '/about-me',
  },
  {
    name: 'Projects',
    link: '/projects',
  }
]

const TopNavigation = () => {
  return (
    <header id="top-navigation" className="flex items-center justify-between w-full h-20 px-7 border-b-[1px] border-b-[#FFFFFF0F] sticky top-0 bg-[--background] z-10">
      <HomeLink/>
      <Menus menuList={menuList} />
    </header>
  );
};

export default TopNavigation;
