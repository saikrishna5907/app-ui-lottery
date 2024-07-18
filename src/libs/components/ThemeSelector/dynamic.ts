import dynamic from 'next/dynamic';

const ThemeSelectorDynamic = dynamic(() => import('.'), {
  ssr: false,
});

export default ThemeSelectorDynamic;
