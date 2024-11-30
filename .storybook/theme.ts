import { create } from '@storybook/theming/create';
import doori from '../packages/ui/src/assets/svgs/logo.svg';

export default create({
  base: 'light',
  colorPrimary: '#BBD029',
  colorSecondary: '#BBD029',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#CAC9CF',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Pretendard, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: '#343434',
  barSelectedColor: '#BBD029',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: '#F4F4F6',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: '두리묭실',
  brandUrl: "here's the brandurl",
  brandImage: doori,
});
