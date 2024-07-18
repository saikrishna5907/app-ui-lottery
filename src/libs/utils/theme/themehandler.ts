import { TLocalStorageValueMap } from '@lottery/types';
import { lcGetItem, lcSetItem } from '../localStorage';

export const setAppDarkOrLightMode = () => {
  if (
    lcGetItem('THEME') === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Whenever the user explicitly chooses mode
export const setAppThemeInLocalStorage = (mode: TLocalStorageValueMap['THEME']) => {
  if (typeof window === 'undefined') return;
  lcSetItem('THEME', mode);
};

// Whenever the user explicitly chooses to respect the OS preference
export const useModeOfOSPreference = () => {
  localStorage.removeItem('mode');
};

export const getAppThemeFromLocalStorage = (): TLocalStorageValueMap['THEME'] | undefined => {
  if (typeof window === 'undefined') return;
  return lcGetItem('THEME') as TLocalStorageValueMap['THEME'];
};

export const themeNameMapper: Record<TLocalStorageValueMap['THEME'], string> = {
  dark: 'Dark',
  light: 'Light',
  cupcake: 'Cupcake',
  bumblebee: 'BumbleBee',
  emerald: 'Emerald',
  corporate: 'Corporate',
  synthwave: 'Synthwave',
  retro: 'Retro',
  cyberpunk: 'Cyberpunk',
  valentine: 'Valentine',
  halloween: 'Halloween',
  garden: 'Garden',
  forest: 'Forest',
  acid: 'Acid',
  lofi: 'Lofi',
  pastel: 'Pastel',
  fantasy: 'Fantasy',
  wireframe: 'Wireframe',
  black: 'Black',
  luxury: 'Luxury',
  dracula: 'Dracula',
  cmyk: 'Cmyk',
  aqua: 'Aqua',
  autumn: 'Autumn',
  business: 'Business',
  coffee: 'Coffee',
  lemonade: 'Lemonade',
  night: 'Night',
  winter: 'Winter',
};
