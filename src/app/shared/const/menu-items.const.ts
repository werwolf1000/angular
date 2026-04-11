export interface INavConst {
  text: string;
  iconUrl: string;
  iconUrlActive: string;
  link: string;
  id: string;
}

export const IMenu: INavConst[] = [
  {
    text: 'Home',
    iconUrl: 'menu/dashboard.svg',
    iconUrlActive: 'menu/dashboard-active.svg',
    link: '/private/dashboard',
    id: 'dashboard',
  },
  {
    text: 'favorites',
    iconUrl: 'menu/wallet.svg',
    iconUrlActive: 'menu/wallet-active.svg',
    link: '/private/assets',
    id: 'wallet',
  },

];
